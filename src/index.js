import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Step1 from "./Components/Step1"
import Step2 from "./Components/Step2"


window.app = {
  view: {
    start: () => {
      const step = (
        <section className="box">
          <Step1/>
        </section>
      );
      return ReactDOM.render(
        <App step={step}/>, document.querySelector("#root"));
    },

    step2: () => {
      const step = (
        <section className="box">
          <Step2 />
        </section>
      );
      return ReactDOM.render(
        <App step={step}/>, document.querySelector("#root"));
    }
  }
}
window
  .app
  .view
  .start()
registerServiceWorker();
