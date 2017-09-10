/*
* @Author: xiaojuan
* @Date:   2017-06-15 11:10:17
* @Last Modified by:   xiaojuan
* @Last Modified time: 2017-06-15 11:12:52
*/

import dva from 'dva';

export default{
	namespace:'products',
	state:[],
	reducers:{
		'delete'(state,{payload:id}){
			return state.filter(item => item.id !==id);
		},
	},
};