import React, {Component} from 'react';
import Button from '../Utils/Button';
import Input from '../Utils/Input';
import SelectOptionsItems from '../Utils/SelectOptionsItems';
import FamilyMember from "../Tools/FamilyMember";

export default class Step4 extends Component {
    constructor(){
        super();
        this.state = {
            value:0, 
            useSpouse: "false",   
            kinshipDegree: 1,
            peopleFamily: 1,
            familyIncome: 0,
            families:[],
        }
    }
    addFamily = ()=>{
        const family = {
            kinshipDegree: this.state.kinshipDegree,
            peopleFamily: this.state.peopleFamily,
            familyIncome: this.state.familyIncome,
            familyPayment: 0,
        }
        this.setState({
            kinshipDegree:1,
            peopleFamily: 1,
            familyIncome: 0,
            families: [...this.state.families, family]
        })
    }
    delFamily = (index)=>{
        const list =  this.state.families.slice();
        list.splice(index.target.id, 1);
        this.setState({
            families: list
        })
        this.render()
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }    
    actionNextStep = () => {
            this.props.changeState({value:2})
      }
    componentWillUnmount(){
        this.props.changeState({families:this.state.families});
          }
    render() {
        const list = ()=> {
            return this.props.kinshipDegree.slice()
        }
        return (
            <div className="step4">
        <table className="step4__tabele">
          <tbody>
            <tr className="step4__tabele--tr">
              <th className="step4__tabele--th">Rodzaj pokrewieństwa</th>
              <th className="step4__tabele--th">Ilość osób w gospodarstwie domowym</th>
              <th className="step4__tabele--th">łączny przychód gospodarstwa domowego</th>
              <th></th>
            </tr>
            {this.state.families.map((x, i)=>{
                return (<FamilyMember key={i} id={i} data={x} list={this.props.kinshipDegree} delFamily={this.delFamily} />)
            })}
          </tbody>
        </table>
        <form>
            <p>Pokrewieństwo</p> 
           <select className="step4__tabele--element" onChange={this.handleChange} name="kinshipDegree" value={this.state.kinshipDegree}>
                <SelectOptionsItems list={list()}/>
             </select> <br/>
             <p>Ilość osób w gospodarstwie domowym</p> <br/>
             <Input 
          className="step4__tabele--element"
          type="number"
          step="1"
          name="peopleFamily"
          value={this.state.peopleFamily}
            onChange={this.handleChange}/> <br/>
            <p>łączny przychód gospodarstwa domowego</p> <br/>
            <Input 
          className="step4__tabele--element"
          type="number"
          step="0.01"
          name="familyIncome"
          value={this.state.familyIncome}
            onChange={this.handleChange}/><br/>
            <Button type="button" kind="button" href="" className={"addFamyli"} lebel={"dodaj rodzine"} click={this.addFamily}/> <br/>
        </form>
        <div className="step4__btn">
        <Button kind="button" className={"nextStep"} lebel={"dalej"} click={this.actionNextStep}/>
        </div>
      </div>
          );
    }
}


