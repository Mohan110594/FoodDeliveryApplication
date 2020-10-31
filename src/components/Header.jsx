 import React from "react";
import {Link} from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>BuffEats</h1>
      <ul>
      <Link to="/logging">
        <button style={{margin:'15px'}} type="button" class="btn btn-secondary btn-sm">Login</button>
        </Link>
        <Link to="/register">
        <button style={{margin:'15px'}} type="button" class="btn btn-secondary btn-sm">Register</button>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
