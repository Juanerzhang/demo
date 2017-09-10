/*
* @Author: xiaojuan
* @Date:   2017-09-03 15:43:11
* @Last Modified by:   xiaojuan
* @Last Modified time: 2017-09-03 19:33:22
*/
import React from 'react';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';

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
let totalBalance=1000;  //假设总余额
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
    }, {
      title: 'address',
      dataIndex: 'address',
    },{
    	title: 'momey',
      	dataIndex: 'momey',
    },{
    	title: 'balance',
      	dataIndex: 'balance',
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
        key: '0',
        name: 'Edward King 0',
        age: '32',
        balance:0,
        money:1000,
        address: 'London, Park Lane no. 0',
      }, {
        key: '1',
        name: 'Edward King 1',
        age: '32',
        balance:0,
        money:1000,
        address: 'London, Park Lane no. 1',
      },{
        key: '2',
        name: 'Edward King 1',
        age: '32',
        balance:0,
        money:1000,
        address: 'London, Park Lane no. 1',
      },{
        key: '3',
        name: 'Edward King 1',
        age: '32',
        balance:0,
        money:1000,
        address: 'London, Park Lane no. 1',
      },{
        key: '4',
        name: 'Edward King 1',
        age: '32',
        balance:0,
        money:1000,
        address: 'London, Park Lane no. 1',
      }],
      count: 2,
    };
  }
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
    status:'',
  };
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
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  //平均分配
  equal=()=>{
  	const { dataSource } =this.state;
  	let keysArr=[];   //用来保存keys
  	let dataLen=dataSource.length;
	for(var i in dataSource){
		keysArr.push(dataSource[i].key);
		dataSource[i].balance=parseInt(totalBalance)/dataLen;
		newDataSources.push(dataSource[i]);
	}
	this.setState({
  		status:'equal',
  		selectedRowKeys:keysArr,
  		dataSource:newDataSources,
  	})
  }
  onSelectChange = (selectedRowKeys,selectedRows) => {
    this.setState({ selectedRowKeys,selectedRows });
  }
  //用户手动选择/取消选择某列
  handleOnSelect=(record, selected, selectedRows)=>{
  	const { dataSource } =this.state;
  	let selectedLen=selectedRows.length;
  	if(selectedLen==0){
  		for(var i in dataSource){
  			dataSource[i].balance=0;
  		}
  	}else{
  		for(var i in selectedRows){
  			if(selected==false){
	  			record.balance=0;
	  		}
  			selectedRows[i].balance=parseInt(totalBalance)/selectedLen;
  		}
  	}
  	
  	this.setState({
  		//dataSource:newDataSources,
  	})
  }
  //用户手动选择/取消选择所有列
  onSelectAll=(selected, selectedRows, changeRows)=>{
  	const { dataSource } =this.state;
  	let selectedLen=selectedRows.length;
	for(var i in dataSource){
		if(selected==true){
			dataSource[i].balance=parseInt(totalBalance)/selectedLen
		}else{
			dataSource[i].balance=0;
		}	
	}  	
  }
  render() {
    const { dataSource,selectedRowKeys,selectedRows } = this.state;
    const rowSelection = {
      selectedRowKeys,
      selectedRows,
      onChange: this.onSelectChange,
      onSelect:this.handleOnSelect,
      onSelectAll:this.onSelectAll
    };
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.equal}>平均分配</Button>
        <Table bordered dataSource={dataSource} columns={columns} rowSelection={rowSelection} />
      </div>
    );
  }
}
