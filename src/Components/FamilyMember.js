import React, {Component} from 'react';
import Input from './Utils/Input';
import SelectOptionsItems from './Utils/SelectOptionsItems';

export default class FamilyMember extends Component {
  state = {
    value: this.props.value,
    id: this.props.id,
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
    return (
      <tr key={this.state.id} className="step4__tabele--tr">
        <td className="step4__tabele--td">
        <select className="step4__tabele--element" onChange={this.handleChange}>
            <SelectOptionsItems list={list}/>
          </select>
        </td>
        <td className="step4__tabele--td">
          <Input 
          className="step4__tabele--element"
          type="number"
          step="1"
            onChange={this.handleChange}/>
            
        </td>
        <td className="step4__tabele--element">
          <Input 
          className="step4__tabele--element"
          type="number"
          step="0.01"
            onChange={this.handleChange}/>
        </td>
      </tr>
    );
  }
} 
