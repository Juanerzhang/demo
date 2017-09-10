/*
* @Author: Juanerzhang
* @Date:   2017-06-25 22:01:26
* @Last Modified by:   Juanerzhang
* @Last Modified time: 2017-06-25 22:14:18
*/
 import React, { Component } from 'react';

 class ClickCounter extends Component{
 	constructor(props){
 		super(props);
 		this.onClickButton = this.onClickButton.bind(this);
 		this.state={count:0};
 	}
 	onClickButton(){
 	 	this.setState({count:this.state.count+1});
 	}

 	render(){
 		return(
 			<div>
 				<button onClick={this.onClickButton}>Click Me</button>
 				<div>
					Click Count :{this.state.count}
 				</div>
 			</div>
 		);
 	}
 }

 export default ClickCounter