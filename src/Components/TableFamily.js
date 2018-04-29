import React, {Component} from 'react';
import RowFamily from './RowFamily';
import mainData from "../data"

export default class TableFamily extends Component {
  state = {
    value: 0,
    family: this.props.family
  }
  render() {
    if (this.state.family === true) {
      return (
        <table id="tableWynik">
          <tbody>
            <tr>
              <th>Rodzaj pokrewieństwa</th>
              <th>Ilość osób w gospodarstwie domowym</th>
              <th>łączny przychód gospodarstwa domowego</th>
              <th>Odpłatność</th>
            </tr>
            {mainData.test.family.map((data, key)=>{
                return(<RowFamily data={data} key={key} />)
            })}
          </tbody>
        </table>
      )
    }
    else  {
      return null 
    }
}
}
