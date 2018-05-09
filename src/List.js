import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {

  let list = props.data;
  props.filter === 'active' ? list = list.filter((items) => items.status !== null) : list = props.data;
  if (props.filter === 'inactive') {
    list = list.filter((items) => items.status === null);
  }
  const items = list.map(item =>
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
      {items}
    </ul>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired
};
export default List;
