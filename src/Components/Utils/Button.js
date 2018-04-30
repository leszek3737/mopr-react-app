import React, {Component} from 'react'
export default class Button extends Component {
  render(data = this.props) {
    return React.createElement("button", {
      className: data.className,
      id: data.id,
      value: data.value,
      onClick: data.click
    }, data.lebel)
  }
}