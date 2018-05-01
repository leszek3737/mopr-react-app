import React from 'react'
const Button = (props) => {
  return React.createElement("button", {
    className: props.className,
    id: props.id,
    value: props.value,
    onClick: props.click
  }, props.lebel)
}
export default Button