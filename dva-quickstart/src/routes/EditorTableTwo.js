import { Table, Input, Popconfirm,Button,Icon } from 'antd';

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}
let newDataSources=[]; //操作后的数据
export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'name')}
        />
      ),
    }, {
      title: 'age',
      dataIndex: 'age',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'age')}
        />
      ),
    }, {
      title: 'address',
      dataIndex: 'address',
    }, {
      title: 'money',
      dataIndex: 'money',
    },{
      title: 'blance',
      dataIndex: 'blance',
    },{
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
              <a href="#">Delete</a>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: 'a',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
        money:1000,
        blance:0,
      },{
        key: 'b',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
        money:500,
        blance:0,
      },{
        key: 'c',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
        money:300,
        blance:0,
      },{
        key: 'd',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
        money:200,
        blance:0,
      },{
        key: 'e',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
        money:100,
        blance:0,
      }],
      count: 2,
      
    };
  }
  state={
    selectedRowKeys: [],  // Check here to configure the default column
    selectedRows:[],
    loading: false,
  }
  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  //保存
  start = () => {
    const { selectedRowKeys,selectedRows }=this.state;
    console.log('selectedRowKeys,selectedRows',selectedRowKeys,selectedRows)
  }
  //平均分配
  equal=()=>{
    const { selectedRowKeys,selectedRows,dataSource }=this.state;
    let len = dataSource.length;
    let keys=[]; //保存所以的key值
    newDataSources=[];
    for(var i in dataSource){
      keys.push(dataSource[i].key);
      dataSource[i].blance=1000/len;   //假设差额为1000;
      newDataSources.push(dataSource[i])
    }
    console.log('newDataSources',newDataSources)
    
    //默认全选
    this.setState({
      selectedRowKeys:keys,
      dataSource:newDataSources,
    })   
  }

  onSelectChange = (selectedRowKeys,selectedRows) => {
    const { dataSource }=this.state;
    console.log('selectedRowKeys changed: ',selectedRowKeys,'selectedRows:',selectedRows);
    this.setState({ selectedRowKeys,selectedRows });
  }
  render() {
    const { data, dataSource, selectedRowKeys, selectedRows, loading } = this.state;
    const rowSelection = {
      selectedRowKeys,
      selectedRows,
      onChange: this.onSelectChange,
    };
    const columns = this.columns;
    return (
      <div>
        <Button
            type="primary"
            onClick={this.start}
            loading={loading}
          >
            保存
          </Button>
          <Button
            type="primary"
            onClick={this.equal}
          >
            评价分配
          </Button>
        <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
        <Table bordered dataSource={dataSource} columns={columns} rowSelection={rowSelection} />
      </div>
    );
  }
}