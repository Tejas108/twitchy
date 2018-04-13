import React from 'react';

const List = (props) => {
  const items = props.data.map(item =>
    <li key={item._id}>
    <a href={item.url}>
      <img src={item.logo} height="50" width="50" alt="logo"/>
      <span>{item.display_name}</span>
      <span>{item.status ? item.status : "Offline"}</span>
    </a>
  </li>
  )
  return (
    <ul>
      { items }
    </ul>
  )
}


export default List;
