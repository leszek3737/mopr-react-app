import React, { Component } from 'react';
import SelectOptionsItems from './Utils/SelectOptionsItems';
import Button from './Utils/Button';
import App from '../App';


class Step1 extends Component {
  render() {
    return (
      <div className="step1">
            <legend>{this.props.legend}
        </legend>
        <fieldset className="dps">
          <select className="dps">
             <SelectOptionsItems {...this.props} />
          </select>
  
        </fieldset>
        <Button {...this.props} />
        {/* {App.button({className:"nextStep", lebel:"dalej", click: () => App.nextStep(".step1", "step2")})} */}
      </div>
    );
  }
}


export default Step1;

