import React, {Component} from 'react';
import Button from './Utils/Button';
import Input from './Utils/Input';
import mainRender from "../index"

export default class Step2 extends Component {
  state = {
    value: 0
  }
  actionNextStep = () => {
    mainRender("step3")
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  render() {
    let data = {
      button: {
        className: "nextStep",
        lebel: "dalej",
        click: this.actionNextStep
      },
      legend: "Krok 2 -Podaj przychód netto",
      input: {
        type: "number",
        id: "dochMiesz",
        step: "0.01"
      }
    }
    return (
      <div className="step2">
        <fieldset>
          <legend>{data.legend}</legend>
          <Input
            type={data.input.type}
            id={data.input.id}
            step={data.input.step}
            value={data.input.value}
            onChange={this.handleChange}/>
        </fieldset>
        <Button
          className={data.button.className}
          lebel={data.button.lebel}
          click={data.button.click}/>
      </div>
    );
  }
}
