/*
* @Author: xiaojuan
* @Date:   2017-06-15 10:40:06
* @Last Modified by:   xiaojuan
* @Last Modified time: 2017-06-15 11:32:20
*/

import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products =({dispatch, products}) =>{
	function handleDelete(id){
		dispatch({
			type:'products/delete',
			payload:id,
		});
	}
	return (
		<div>
			<h2>List of Products</h2>
			<ProductList onDelete={handleDelete} products={products} />
		</div>
	);
};

//export default Products;
export default connect(({ products })=>({
	products,
}))(Products);
