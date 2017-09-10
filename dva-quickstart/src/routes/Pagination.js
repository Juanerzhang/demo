import { Table, Input, Popconfirm,Button,Icon } from 'antd';

import { Pagination } from 'antd';
import Tables from './EditorTable.js';

export default class App extends React.Component{
  /*function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}*/
  render(){
    const list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return(
      <div>
        <div>
          {list.map(item=><Tables />)}
          </div>
        <Pagination showQuickJumper defaultCurrent={2} total={list.length}  />
      </div>
      )
      
  }
}
