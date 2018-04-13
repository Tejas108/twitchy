import React from 'react';

const Header = (props) => (
  <header>
    <h1>Twitchy TV</h1>
    <input type="text" value="" placeholder="Search"/>
    <br/>
    <button onClick={props.showAll}>all</button>
    <button onClick={props.showOnline}>online</button>
  </header>
)

export default Header;
