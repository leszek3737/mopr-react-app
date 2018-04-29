import React from 'react';
import './App.css';
import Step1 from "./Components/Step1"
import Step2 from "./Components/Step2"
import Step3 from "./Components/Step3"
import Step4 from "./Components/Step4"
import Result from "./Components/Result"

export default class App extends React.Component {
  state = {
    start: (
      <section className="box">
        <Step1/>
      </section>
    ),
    step2: (
      <section className="box"><Step2/>
      </section>
    ),
    step3: (
      <section className="box">
        <Step3/>
      </section>
    ),
    step4: (
      <section className="box">
        <Step4/>
      </section>
    ),
    result: (family) => {
      return (
        <section className="box">
          <Result family={family}/>
        </section>
      )
    }
  }
  render() {
    switch (this.props.type) {
      case "start":
        return this.state.start;
      case "step2":
        return this.state.step2;
      case "step3":
        return this.state.step3;
      case "step4":
        return this.state.step4;
      case "result":
        return this
          .state
          .result(this.props.family);
      default:
        return null
    }
  }
}
