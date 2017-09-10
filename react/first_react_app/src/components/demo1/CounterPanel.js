/*
* @Author: Juanerzhang
* @Date:   2017-06-25 22:18:03
* @Last Modified by:   Juanerzhang
* @Last Modified time: 2017-06-25 22:24:09
*/

import React , { Component } from 'react';
import ClickCounter from './ClickCounter';

class CounterPanel extends Component {
	render(){
		return(
			<div>
			<ClickCounter />
			<ClickCounter />
			<ClickCounter />
		</div>
		);
	}
}

export default CounterPanel