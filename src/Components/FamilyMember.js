import React, {Component} from 'react';
import Button from './Utils/Button';
import Input from './Utils/Input';
import mainData from "../data"
import SelectOptionsItems from './Utils/SelectOptionsItems';

export default class FamilyMember extends Component {
  state = {
    value: this.props.value,
    kinshipDegree: 0,
  }
  actionNextStep = () => {
    window
      .app
      .view
      .start()
  }

  handleChange = (event) => {
    this.setState({
        date: event.target.date
      })
    console.log(this.state.data)
  }

  componentWillUnmount() {}
  render() {
    const list = this.props.list
    console.log(list)
    return (
      <tr>
        <td>
        <select onChange={this.handleChange}>
            <SelectOptionsItems list={list}/>
          </select>
        </td>
        <td>
          <Input 
            onChange={this.handleChange}/>
        </td>
        <td>
          <Input 
            onChange={this.handleChange}/>
        </td>
        <td>
          <Button 
          className={"removeFamilyMemberBtn"}
          lebel={"usuń"}
        //   click={this.actionNextStep}
          />
        </td>
      </tr>
    );
  }
}