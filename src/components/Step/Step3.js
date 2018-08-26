import React, {Component} from 'react';
import Button from '../Utils/Button';
import Input from '../Utils/Input';

export default class Step3 extends Component {
    constructor(){
        super();
        this.state = {
            value:0,
            hasfamily: false,
            data: {
                button: {
                  className: "nextStep",
                  lebel: "dalej",
                  click: this.actionNextStep
                },
                legend: "step 3 - Czy mieszkaniec posiada żyjącą rodzinę ?(żonę, dzieci, wnuki, rodziców," +
                    " dziadków itd.)",
                input: {
                  type: "radio",
                  id: "dochMiesz",
                  name: "family",
                }
              }
        }
    }

    handleChange = (event)=>{
        this.setState({
            hasfamily: event.target.value,
        });
    }    
    actionNextStep = () => {
        if (this.state.hasfamily === "true"){
            this.props.changeState({value:0})
        } else {
            this.props.changeState({value:1})
        }
      }
    componentWillUnmount(){
        this.props.changeState({hasfamily:this.state.hasfamily});
          }
    render() {
        return (
            <div className="step3">
              <fieldset>
                <legend>{this.state.data.legend}</legend>
                <Input
                  type={this.state.data.input.type}
                  id={this.state.data.input.id}
                  step={this.state.data.input.step}
                  value={false}
                  checked={true}
                  name={this.state.data.input.name}
                  onChange={this.handleChange}/>
                nie
                <Input
                  type={this.state.data.input.type}
                  id={this.state.data.input.id}
                  step={this.state.data.input.step}
                  value={true}
                  name={this.state.data.input.name}
                  onChange={this.handleChange}/>
                tak
                <Button
                  className={this.state.data.button.className}
                  lebel={this.state.data.button.lebel}
                  click={this.state.data.button.click}/>
              </fieldset>
            </div>
          );
    }
}


