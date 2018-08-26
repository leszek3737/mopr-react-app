import React, {Component} from 'react';
import Button from '../Utils/Button';
import Input from '../Utils/Input';

export default class Step2 extends Component {
    constructor(){
        super();
        this.state = {
            value:0,
            repayment: 0,
            data: {
                button: {
                    className: "nextStep",
                    lebel: "dalej",
                    click: this.actionNextStep
                  },
                  legend: "Krok 2 -Podaj przychód netto",
                  input: {
                    type: "number",
                    id: "dochMiesz",
                    step: "0.01",
                  }
                }
        }
    }

    handleChange = (event)=>{
        this.setState({
            repayment: event.target.value,
        });
        
        this.props.changeState({inhabitant:this.state.value});
    }    
    actionNextStep = () => {
        this.props.changeState({value:2});
      }
      componentWillUnmount(){
        this.props.changeState({inhabitant:this.state.value});
          }
    render() {
        return (
            <div className="step2">
            <fieldset>
              <legend>{this.state.data.legend}</legend>
              <Input
                type={this.state.data.input.type}
                id={this.state.data.input.id}
                step={this.state.data.input.step}
                value={this.state.repayment}
                onChange={this.handleChange}/>
            </fieldset>
            <Button
              className={this.state.data.button.className}
              lebel={this.state.data.button.lebel}
              click={this.state.data.button.click}/>
          </div>
        )
    }
}


