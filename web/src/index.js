import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Route
} from "react-router-dom";

const routes = (
  <BrowserRouter>
      <Route exact path="/" component={App}/>
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('root'))

serviceWorker.unregister();
