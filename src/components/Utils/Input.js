import React from 'react'
const Imput = (props) => {
  return React.createElement("input", {
    type: props.type,
    step: props.step,
    onChange: props.onChange,
    className: props.className,
    id: props.id,
    value: props.value,
    name: props.name,
    onClick: props.click,
    defaultChecked: props.checked
  }, props.lebel)
}
export default Imput
