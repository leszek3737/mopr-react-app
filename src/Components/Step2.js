import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import SelectOptionsItems from './Utils/SelectOptionsItems';
import Button from './Utils/Button';
import Input from './Utils/Input';

export default class Step2 extends Component {
  state = {
    value: 0
  }
  actionNextStep = () => {
    window
      .app
      .view
      .start()
  }

  handleChange = (event) => {
    //do odzielenie do logiki 
    let data = Math.round(0.7 * event.target.value * 100) / 100;
    this.setState({value: data})
  }

  componentWillUnmount() {
    window.__data__.odp.cost.mieszkaniec = this.state.value
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
        step: "0.01",
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
