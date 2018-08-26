import React, { Component } from 'react'
import Start from "./Step/Start"
import Step2 from "./Step/Step2"

export default class App extends Component {
  constructor() {
      super()
      this.state = {
        value: 0,
        date:{
            dps : [
                {
                  id: 0,
                  koszt: 4000,
                  name: "DPS dla osób niepełnosprawnych fizycznie"
                }, {
                  id: 1,
                  koszt: 3900,
                  name: "DPS 2"
                }, {
                  id: 2,
                  koszt: 3800,
                  name: "DPS 3"
                }
              ],
        },
        dps:0,
        inhabitant:0,
    }
  }
    changeState = (data)=>{
        this.setState(data)
    }   
  render() {
    const content = [
        ()=>{
            return <Start dps={this.state.date.dps} changeState={this.changeState}/>   
        },
        ()=>{
            return <Step2 changeState={this.changeState}/>
        },
    ]
    return (
        <section className="box">
            {content[this.state.value]()}
        </section>
    )
  }
}

