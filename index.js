import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import store from './store';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'mdbootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const App = (
  <Provider store={store}>
    {/* <Notify /> */}
    < Routes />
  </Provider>
);


ReactDOM.render(App, document.getElementById('root'));
