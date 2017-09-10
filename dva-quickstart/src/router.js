import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Products from './routes/Products';
import Form from './routes/Form';
import SideMenu from './routes/SideMenu';
import Tab from './routes/Tab';
import TableSubmit from './routes/TableSubmit';
import EditorTableTwo from './routes/EditorTableTwo';
import EditorTable from './routes/EditorTable';
import Pagination from './routes/Pagination';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/products" component={Products} />
      <Route path="/form" component={Form} />
      <Route path="/sideMenu" component={SideMenu} />
      <Route path='/tab' component={Tab} />
      <Route path='/tableSubmit' component={TableSubmit} />
      <Route path='/editorTableTwo' component={EditorTableTwo} />
      <Route path='/editorTable' component={EditorTable} />
      <Route path='/pagination' component={Pagination} />
    </Router>
  );
}

export default RouterConfig;
