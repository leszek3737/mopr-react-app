import React, {Component} from 'react';
import Button from './Utils/Button';
import Input from './Utils/Input';
import mainData from "../data"

import SelectOptionsItems from './Utils/SelectOptionsItems';
export default class Step4 extends Component {
  state = {
    value: this.props.value,
    date: 0,
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
    console.log(this.state.data)
    return (
        
      <tr>
        <td>
        <select onChange={this.handleChange}>
            <SelectOptionsItems list={mainData.kinshipDegree}/>
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
          <Button />
        </td>
      </tr>
    );
  }
}