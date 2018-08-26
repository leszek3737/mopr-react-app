import React, { Component } from 'react'
import Start from "./Step/Start"

export default class App extends Component {
  constructor() {
      super()
      this.state = {
        render: {
            start: (date, changeState)=>{
                return <Start dps={date} changeState={changeState}/>   
            }
            // step2: (
            //   <section className="box"><Step2/>
            //   </section>
            // ),
            // step3: (
            //   <section className="box">
            //     <Step3/>
            //   </section>
            // ),
            // step4: (
            //   <section className="box">
            //     <Step4/>
            //   </section>
            // ),
            // result: (family) => {
            //   return (
            //     <section className="box">
            //       <Result family={family}/>
            //     </section>
            //   )
            // }
        },
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
        store:{
            dps: 0,
        }
    }
  }
    changeState = (dps)=>{
        this.setState({
            store: {
                dps: dps
            }
        })
    }   
  render() {
    const content = (type) => {
        switch (type) {
        case "start":
          return this.state.render.start(this.state.date.dps, this.changeState);
        // case "step2":
        //   return this.state.render.step2;
        // case "step3":
        //   return this.state.render.step3;
        // case "step4":
        //   return this.state.render.step4;
        // case "result":
        //   return this
        //     .state
        //     .render
        //     .result(this.props.family);
        default:
          return null
      }}
    return (
        <section className="box">
            {content(this.props.type)}
        </section>
    )
  }
}

