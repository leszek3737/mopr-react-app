import React from 'react'
const SelectOptionsItems = (props) => {
    return props.list.map((list) => {
      return React.createElement("option", {
        id: list.id,
        value: list.id,
        key: list.id
      }, list.name);
    });
  }
  export default SelectOptionsItems