/*
* @Author: Juanerzhang
* @Date:   2017-06-25 22:01:26
* @Last Modified by:   Juanerzhang
* @Last Modified time: 2017-06-28 22:06:01
*/
 import React, { Component } from 'react';

 class ClickCounter extends Component{
 	constructor(props){
 		super(props);
 		this.onClickButtonAdd = this.onClickButtonAdd.bind(this);
 		this.onClickButtonMin = this.onClickButtonMin.bind(this);
 		this.state={
 			count:props.initValue || 0
 		};
 		console.log("enter constructor " + this.props.name);
 	}
 	
 	onClickButtonAdd(){
 	 	this.setState({count:this.state.count+1});
 	}
 	onClickButtonMin(){
 	 	this.setState({count:this.state.count-1});
 	}
 	componentWillMount(){ //将要装载
 		console.log("enter componentWillMount " + this.props.name);
 	}
 	componentDidMount(){ //仅在浏览器端执行
 		console.log("enter componentDidMount " +this.props.name);
 	}

 	componentWillReceiveProps(nextProps){
 		console.log("enter componentWillReceiveProps " +this.props.name);
 	}
 	shouldComponentWillUpdate(nextProps,nextState){
 		return (nextProps.name !== this.props.name) ||
 		(nextProps.count !== this.props.count);
 	}
 	componentWillUpdate(nextProps){

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

 export default ClickCounter