import React, {Component} from 'react'
export default class SelectOptionsItems extends Component {
  render(data = data = this.props.dpsList) {
    return data.map((data) => {
      return React.createElement("option", {
        id: data.id,
        value: data.id,
        key: data.id
      }, data.name);
    });
  }
}