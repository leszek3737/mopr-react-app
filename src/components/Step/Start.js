import React, { Component } from 'react'
import SelectOptionsItems from '../Utils/SelectOptionsItems';
import Button from '../Utils/Button';
import DpsInfo from '../Tools/DpsInfo'

export default class Start extends Component {
    constructor(){
        super();
        this.state = {
            value:0,
            data: {
                button: {
                  className: "nextStep",
                  lebel: "dalej",
                  click: this.actionNextStep
                },
                legend: "Wybierz dom pomocy społecznej"
              }
        }
    }

    handleChange = (event)=>{
        this.setState({value: event.target.value});
    }    
    actionNextStep = () => {
        console.log(this.props)
      }
      componentWillUnmount(){
        this.props.changeState(this.state.value)
      }
    render() {
        return (
            <div className="step1">
            <legend>{this.state.data.legend}
            </legend>
            <fieldset className="dps">
            <select className="dps" onChange={this.handleChange}>
                <SelectOptionsItems list={this.props.dps}/>
            </select>
            </fieldset>
            <Button
            className={this.state.data.button.className}
            lebel={this.state.data.button.lebel}
            click={this.state.data.button.click}/>
            <DpsInfo data={this.props.dps} value={this.state.value}/>
        </div>
        )
    }
}


