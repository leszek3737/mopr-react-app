import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from "./components/App"

ReactDOM.render(<App type={"start"} />, document.getElementById("root"));

registerServiceWorker();
