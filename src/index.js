import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export default function mainRender(type, family) {
  return ReactDOM.render(
    <App type={type} family={family}/>, document.querySelector("#root"));
}

mainRender("start");
registerServiceWorker();