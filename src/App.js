import React, {Component} from 'react';
import './App.css';
import Step1 from './Components/Step1';

export default class App extends Component {
  render() {
    return (
      <section className="box">
        <Step1/>
      </section>
    )
  }
}
