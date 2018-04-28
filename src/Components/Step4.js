import React, {Component} from 'react';
import Button from './Utils/Button';
// import Input from './Utils/Input';
import FamilyMember from './FamilyMember';
import mainData from "../data"

export default class Step4 extends Component {
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
    this.setState({value: event.target.value})
    console.log(event.target.value)
  }

  componentWillUnmount() {}
  render() {
    const list = mainData.kinshipDegree
    return (
      <div className="step3">
        <table>
          <tbody>
            <tr>
              <th>Rodzaj pokrewieństwa</th>
              <th>Ilość osób w gospodarstwie domowym</th>
              <th>łączny przychód gospodarstwa domowego</th>
              <th></th>
            </tr>
            <FamilyMember value="0" list={list}/>
          </tbody>
        </table>
        <Button
          className={"nextStep"}
          lebel={"dalej"}
          click={this.actionNextStep}/>
      </div>
    );
  }
}