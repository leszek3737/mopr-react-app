import React from 'react'
const Button = (props) => {
  return React.createElement(props.kind , {
    className: props.className,
    id: props.id,
    value: props.value,
    onClick: props.click,
    href: props.href,
    type: props.type,
  }, props.lebel)
}
export default Button