import React from 'react'

const Child = (props) => {

  const data = "I am from Child page";
  props.onChildData(data);

  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  )
}

export default Child;

