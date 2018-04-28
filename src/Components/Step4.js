import React, {Component} from 'react';
import Button from './Utils/Button';
// import Input from './Utils/Input';
import FamilyMember from './FamilyMember';
import mainData from "../data"
var list = mainData.kinshipDegree
export default class Step4 extends Component {
  state = {
    value: 0,
    familyMembers: [(<FamilyMember value="0" id="0" key="0" list={mainData.kinshipDegree}/>)]
  }
  getValue(){
    return this.state.value
}
  actionNextStep = () => {
    window
      .app
      .view
      .start()
  }
  addFamily = () => {
    const data= this.state.value +1 
      this.setState({value: data})
      this.state.familyMembers.push((<FamilyMember value={data} id={data} key={data} list={list}/>))
       if (data === 1){
        list.shift()
      }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  componentWillUnmount() {}
  render() {
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
            {this.state.familyMembers.map((x) =>{
                return x
            })}
          </tbody>
          
        </table>
        <Button
          className={"addFamyli"}
          lebel={"dodaj rodzine"}
          click={this.addFamily}/>
        <Button
          className={"nextStep"}
          lebel={"dalej"}
          click={this.actionNextStep}/>
      </div>
    );
  }
}