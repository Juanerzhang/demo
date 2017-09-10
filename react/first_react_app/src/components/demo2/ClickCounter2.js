/*
* @Author: Juanerzhang
* @Date:   2017-06-25 22:01:26
* @Last Modified by:   Juanerzhang
* @Last Modified time: 2017-06-29 21:37:46
*/
 import React, { Component, PropTypes  } from 'react';

 class ClickCounter extends Component{
 	constructor(props){
 		super(props);
 		this.onClickButtonAdd = this.onClickButtonAdd.bind(this);
 		this.onClickButtonMin = this.onClickButtonMin.bind(this);
 		this.state={
 			count:props.initValue
 		};
 	}
 	
 	onClickButtonAdd(){
 		this.onClickUopdate(true);
 	}
 	onClickButtonMin(){
 	 	this.onClickUopdate(false);
 	}

 	onClickUopdate(Isadd){
 		 const previousValue=this.state.count;  //当前的值
	 	 const newValue=Isadd?this.state.count+1:this.state.count-1; //新的值
	 	 this.setState({
	 	 	count:newValue, //将新值赋给count
	 	 });
	 	 this.props.onUpdate(newValue,previousValue); //调用父组件的方法，将值传给父组件
 	}

 	render(){
 		console.log("enter render " +this.props.name);
 		const { name } =this.props;
 		const btn={
 			margin:'0 3px',
 		}
 		return(
 			<div>
 				<button style={btn} onClick={this.onClickButtonAdd}>+</button>
 				<button style={btn} onClick={this.onClickButtonMin}>-</button>
 				<span style={btn}>{name}</span>
 				<span style={btn}>
					count :{this.state.count}
 				</span>
 			</div>
 		);
 	}
 }
 ClickCounter.propTypes = {
  name: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
};

 ClickCounter.defaultProps = {
 	initValue:0,
 	onUpdate:f=>f,
 };

 export default ClickCounter