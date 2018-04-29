import React, {Component} from 'react';
import mainData from "../data"

export default class Step1 extends Component {
  render() {
    return (
         <article className="step1__info">
              <header>
                <h3>{mainData.dps[this.props.value].name} </h3>
              </header>
              <h5>Koszt pobytu w tym DPS wynosi:</h5>
              <p> {mainData.dps[this.props.value].koszt} zł </p>
          </article> 
    );
  }
}
