import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header>
    <h1>Twitchy TV</h1>
    <input type="text" value="" placeholder="Search"/>
    <br/>
    <button onClick={props.showAll}>all</button>
    <button onClick={props.showOnline}>online</button>
    <button onClick={props.showOffline}>offline</button>
  </header>
)

Header.propTypes = {
  showAll: PropTypes.func,
  showOnline: PropTypes.func,
  showOffline: PropTypes.func
};
export default Header;
