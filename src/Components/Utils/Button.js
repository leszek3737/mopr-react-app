import React, {Component} from 'react'
export default class SelectOptionsItems extends Component {
  render(data = this.props.button) {
        return React.createElement("button", {
          className: data.className,
          id: data.id,
          value: data.value,
          onClick: data.click
        }, data.lebel)
  }
}