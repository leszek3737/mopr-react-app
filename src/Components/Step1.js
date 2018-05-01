import React, {Component} from 'react';
import SelectOptionsItems from './Utils/SelectOptionsItems';
import Button from './Utils/Button';
import mainData from "../data"
import mainRender from "../index"
import DpsInfo from "./DpsInfo"

export default class Step1 extends Component {
  state = {
    value: 0
  }
  actionNextStep = () => {
    mainRender("step2")
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  render() {
    let data = {
      dpsList: mainData.dps,
      button: {
        className: "nextStep",
        lebel: "dalej",
        click: this.actionNextStep
      },
      legend: "Wybierz dom pomocy społecznej"
    }
    return (
      <div className="step1">
        <legend>{data.legend}
        </legend>
        <fieldset className="dps">
          <select className="dps" onChange={this.handleChange}>
            <SelectOptionsItems list={data.dpsList}/>
          </select>
        </fieldset>
        <Button
          className={data.button.className}
          lebel={data.button.lebel}
          click={data.button.click}/>
        <DpsInfo data={mainData.dps} value={this.state.value}/>
      </div>
    );
  }
}