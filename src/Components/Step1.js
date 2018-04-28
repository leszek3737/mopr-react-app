import React, {Component} from 'react';
import SelectOptionsItems from './Utils/SelectOptionsItems';
import Button from './Utils/Button';
import mainData from "../data"
import DpsInfo from "./DpsInfo"

export default class Step1 extends Component {
  state = {
    value: 0,
  }
  actionNextStep = () => {window.app.view.step2()}

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  componentWillUnmount(){
//    mainData.odp.cost.dps = mainData.dps[this.state.value].koszt
   }
  render() {
    let data = {
      dpsList: mainData.dps,
      button: {
        className: "nextStep",
        lebel: "dalej",
        click: this.actionNextStep,
      },
      legend: "Wybierz dom pomocy społecznej",
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
         <DpsInfo value={this.state.value}/>
      </div>
    );
  }
}