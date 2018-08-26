import React, { Component } from 'react'
import Start from "./Step/Start"
import Step2 from "./Step/Step2"
import Step3 from "./Step/Step3"
import Step4 from "./Step/Step4"

export default class App extends Component {
  constructor() {
      super()
      this.state = {
        value: 0,
        data:{
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
              kinshipDegree : [
                {
                  id: 0,
                  name: "Małżonek",
                  mustBeUnique: true
                }, {
                  id: 1,
                  name: "Dziecko",
                  mustBeUnique: false
                }, {
                  id: 2,
                  name: "Wnuk",
                  mustBeUnique: false
                }, {
                  id: 3,
                  name: "Rodzic",
                  mustBeUnique: false
                }, {
                  id: 4,
                  name: "Dziadki",
                  mustBeUnique: false
                }
              ],
        },
        dps:0,
        inhabitant:0,
        hasfamily: false,
        family:[],
    }
  }
    changeState = (data)=>{
        this.setState(data)
    }   
  render() {
    const content = [
        ()=>{
            return <Start dps={this.state.data.dps} changeState={this.changeState}/>   
        },
        ()=>{
            return <Step2 changeState={this.changeState}/>
        },
        ()=>{
            return <Step3 changeState={this.changeState}/>
        },
        ()=>{
            return <Step4 kinshipDegree={this.state.data.kinshipDegree} changeState={this.changeState}/>
        },
    ]
    return (
        <section className="box">
            {content[this.state.value]()}
        </section>
    )
  }
}

