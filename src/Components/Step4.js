import React, {Component} from 'react';
import Button from './Utils/Button';
// import Input from './Utils/Input';
import FamilyMember from './FamilyMember';
import mainData from "../data"
let list = mainData.kinshipDegree
export default class Step4 extends Component {
  state = {
    value: 0,
    familyMembers: [(<FamilyMember value="0" id="0" key="0" list={mainData.kinshipDegree}/>)]
  }
  getValue() {
    return this.state.value
  }
  actionNextStep = () => {
    window
      .app
      .view
      .result(true)
  }
  addFamily = () => {
    const data = this.state.value + 1
    this.setState({value: data})
    this
      .state
      .familyMembers
      .push((<FamilyMember value={data} id={data} key={data} list={list}/>))
    if (data === 1) {
      list.shift()
    }
  }
  delFamily = () => {
    const data = this.state.value - 1
    this.setState({value: data})
    this
      .state
      .familyMembers
      .pop()
    if (data === 0) {
      list.unshift({id: 0, name: "Małżonek", mustBeUnique: true})
    }
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  componentWillUnmount() {}
  render() {
    return (
      <div className="step4">
        <table className="step4__tabele">
          <tbody>
            <tr className="step4__tabele--tr">
              <th className="step4__tabele--th">Rodzaj pokrewieństwa</th>
              <th className="step4__tabele--th">Ilość osób w gospodarstwie domowym</th>
              <th className="step4__tabele--th">łączny przychód gospodarstwa domowego</th>
            </tr>
            {this
              .state
              .familyMembers
              .map((x) => {
                return x
              })}
          </tbody>

        </table>
        <div className="step4__btn">
          <Button className={"addFamyli"} lebel={"dodaj rodzine"} click={this.addFamily}/>
          <Button
            className={"delFamyli"}
            lebel={"usuń odstatnią rodzinę"}
            click={this.delFamily}/>
          <Button className={"nextStep"} lebel={"dalej"} click={this.actionNextStep}/>
        </div>
      </div>
    );
  }
}