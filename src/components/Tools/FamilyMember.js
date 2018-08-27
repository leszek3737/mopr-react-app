import React, {Component} from 'react';
import Button from "../Utils/Button"

export default class FamilyMember extends Component {
  render() {
    return (
      <tr  className="step4__tabele--tr">
        <td className="step4__tabele--td">
          {this.props.list[this.props.data.kinshipDegree].name}
        </td>
        <td className="step4__tabele--td">
          {this.props.data.peopleFamily}
        </td>
        <td className="step4__tabele--td">
          {this.props.data.familyIncome}
        </td>
        <td className="step4__tabele--td">
            <Button kind="button" className={"delFamily"} lebel={"usuń"} click={this.props.delFamily}/>
        </td>
      </tr>
    );
  }
} 
