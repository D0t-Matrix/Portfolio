import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sass/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProperties } from './utils/PagesUtilData';


ReactDOM.render(
  <React.StrictMode>
    <App title={AppProperties.title} theme={AppProperties.theme} pages={AppProperties.pages} brand={AppProperties.brand}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
