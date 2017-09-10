/*
* @Author: Juanerzhang
* @Date:   2017-06-25 22:18:03
* @Last Modified by:   Juanerzhang
* @Last Modified time: 2017-06-29 21:28:36
*/

import React , { Component } from 'react';
import ClickCounter from './ClickCounter2';

class CounterPanel extends Component {
	constructor(props){
		super(props);
		this.onCounterUpdate= this.onCounterUpdate.bind(this);

		this.initValues=[10,2,9];
		const initSum=this.initValues.reduce((a,b)=>a+b,0);
		this.state={
			sum:initSum,
		}
	}
	onCounterUpdate(newValue,previousValue){
		const newChange=newValue-previousValue;
		this.setState({
			sum:this.state.sum + newChange,
		})
	}
	
	render(){
		return(
			<div>
			<ClickCounter onUpdate={this.onCounterUpdate} name="First" initValue={this.initValues[0]} />
			<ClickCounter onUpdate={this.onCounterUpdate} name="Second" initValue={this.initValues[1]} />
			<ClickCounter onUpdate={this.onCounterUpdate} name="Third" initValue={this.initValues[2]} />
			<div className="total">Total:{this.state.sum}</div>
		</div>
		);
	}
}

export default CounterPanel