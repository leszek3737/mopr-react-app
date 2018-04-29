import React, {Component} from 'react';
import mainData from "../data"

export default class RowFamily extends Component {
  state = {
    data: this.props.data,
  }
  componentWillUnmount() {}
  render() {
     const data= this.state.data
    return (
      <tr key={data.id}>
        <td className="wynikRodzaj">{mainData.kinshipDegree[data.type].name}</td>
        <td className="wynikOsGosDom">{data.ilość}</td>
        <td className="wynikDochGosDom">{data.doch}</td>
        <td className="wynikOdplatnosc">{data.odplRo}</td>
      </tr>
    )
  }
}
