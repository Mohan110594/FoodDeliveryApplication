 import React from "react";
import {Link} from "react-router-dom"
import LoginControl from "./LoginControl"

function Header(props) {


  
  return (
    <header>
      <h1>BuffEats</h1>
      <LoginControl status={props.status} user={props.user}/>
    </header>
  );
}

export default Header;
