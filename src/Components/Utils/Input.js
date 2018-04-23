import React, {Component} from 'react'
export default class Input extends Component {
  render(data = this.props) {
        return React.createElement("input", {
          type: data.type,
          step: data.step,
          onChange: data.onChange,
          className: data.className,
          id: data.id,
          value: data.value,
          onClick: data.click
        }, data.lebel)
  }
}