import React from 'react';

function Li(props) {
  console.log(props);
  return (
    <li 
    className="list-group-item">
    {props.value}
  </li>
    )

}
export default Li;