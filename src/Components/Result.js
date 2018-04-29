import React, {Component} from 'react';
import Button from './Utils/Button';
// import Input from './Utils/Input';
import TabeleFamily from './TableFamily';
import mainData from "../data"
export default class Step4 extends Component {
  state = {
    value: 0,
    famyli: this.props.famyli    
}
  getValue() {
    return this.state.value
  }
  render() {
    return (
      <div className="step4">
        <fieldset>
          <div>
            <h5>
              Koszt pobytu w dps</h5>
            <p id="costDps">{mainData.test.cost.dps}</p>
          </div>
          <div>
            <h5>
              Odpłatność mieszkańca</h5>
            <p id="costMieszkaniec">{mainData.test.cost.mieszkaniec}</p>
          </div>
                <TabeleFamily famyli={this.state.famyli}/>
          <div>
            <h5>
              odpłatność gminy</h5>
            <p id="costGmina">{mainData.test.cost.gminy}</p>
          </div>
        </fieldset>
      </div >
    );
  }
}
