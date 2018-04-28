import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Step1 from "./Components/Step1"
import Step2 from "./Components/Step2"
import Step3 from "./Components/Step3"
import Step4 from "./Components/Step4"


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
    },
    step3: () => {
      const step = (
        <section className="box">
          <Step3 />
        </section>
      );
      return ReactDOM.render(
        <App step={step}/>, document.querySelector("#root"));
    },
    step4: () => {
      const step = (
        <section className="box">
          <Step4 />
        </section>
      );
      return ReactDOM.render(
        <App step={step}/>, document.querySelector("#root"));
    },
  }
}
window
  .app
  .view
  .start()
registerServiceWorker();
