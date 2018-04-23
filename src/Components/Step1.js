import React, {Component} from 'react';
import SelectOptionsItems from './Utils/SelectOptionsItems';
import Button from './Utils/Button';

export default class Step1 extends Component {
  state = {
    value: 0,
  }
  static actionNextStep = () => {
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  
  componentWillUnmount(){
    window.__data__.odp.cost.dps = window.__data__.dps[this.state.value].koszt
  }
  render() {
    let data = {
      dpsList: window.__data__.dps,
      button: {
        className: "nextStep",
        lebel: "dalej",
        click: this.actionNextStep,
      },
      legend: "Wybierz dom pomocy społecznej",
      onChange: this.actionSelectDps,
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
      </div>
    );
  }
}