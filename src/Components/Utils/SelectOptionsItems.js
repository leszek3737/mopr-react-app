import React, {Component} from 'react'
export default class SelectOptionsItems extends Component {
  render(list = this.props.list) {
    return list.map((list) => {
      return React.createElement("option", {
        id: list.id,
        value: list.id,
        key: list.id
      }, list.name);
    });
  }
}