import React from 'react';

export default(props) => {
  return (
    <article className="step1__info">
      <header>
        <h3>{props.data[props.value].name}
        </h3>
      </header>
      <h5>Koszt pobytu w tym DPS wynosi:</h5>
      <p>
        {props.data[props.value].koszt}
        zł
      </p>
    </article>
  );
}