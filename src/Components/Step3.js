import React, {Component} from 'react';
import Button from './Utils/Button';
import Input from './Utils/Input';
import mainRender from "../index"

export default class Step3 extends Component {
  state = {
    value: "0"
  }
  actionNextStep = () => {
    if (this.state.value === "0") {
      mainRender("result",false)
    } else {
      mainRender("step4")
    }
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
      legend: "step 3 - Czy mieszkaniec posiada żyjącą rodzinę ?(żonę, dzieci, wnuki, rodziców," +
          " dziadków itd.)",
      input: {
        type: "radio",
        id: "dochMiesz",
        name: "family"
      }
    }
    return (
      <div className="step3">
        <fieldset>
          <legend>{data.legend}</legend>
          <Input
            type={data.input.type}
            id={data.input.id}
            step={data.input.step}
            value={0}
            checked={true}
            name={data.input.name}
            onChange={this.handleChange}/>
          nie
          <Input
            type={data.input.type}
            id={data.input.id}
            step={data.input.step}
            value={1}
            name={data.input.name}
            onChange={this.handleChange}/>
          tak
          <Button
            className={data.button.className}
            lebel={data.button.lebel}
            click={data.button.click}/>
        </fieldset>
      </div>
    );
  }
}
