import React, {Component} from 'react';
import SelectOptionsItems from './Utils/SelectOptionsItems';
import Button from './Utils/Button';

export default class Step1 extends Component {
  actionNexStep() {
    console.log("aaa")
  }
  render() {
    let data = {
      dpsList: window.__data__.dps,
      button: {
        className: "nextStep",
        lebel: "dalej",
        click: this.actionNexStep
      },
      legend: "Wybierz dom pomocy społecznej"
    }
    return (
        <div className="step1">
          <legend>{data.legend}
          </legend>
          <fieldset className="dps">
            <select className="dps">
              <SelectOptionsItems 
                list={data.dpsList}/>
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

