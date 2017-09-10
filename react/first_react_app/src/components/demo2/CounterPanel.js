/*
* @Author: Juanerzhang
* @Date:   2017-06-25 22:18:03
* @Last Modified by:   Juanerzhang
* @Last Modified time: 2017-06-28 21:51:18
*/

import React , { Component } from 'react';
import ClickCounter from './ClickCounter';

class CounterPanel extends Component {
	
	render(){
		return(
			<div>
			<ClickCounter name="First" initValue={10} />
			<ClickCounter name="Second" initValue={6} />
			<ClickCounter name="Third" initValue={1} />
		</div>
		);
	}
}

export default CounterPanel