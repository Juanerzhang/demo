import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import CounterPanel from './components/demo2/CounterPanel2';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<CounterPanel />, document.getElementById('root'));
registerServiceWorker();
