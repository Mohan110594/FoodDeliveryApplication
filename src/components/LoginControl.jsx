import React from "react";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {Link } from "react-router-dom"




function LoginControl(props) {

  let isLoggedIn=props.status

  if (isLoggedIn === 'true') {
    return <div>
      <h1>Welcome {props.user}</h1>
      <Link to="/">
        <button style={{margin:'15px'}} type="submit" className="btn btn-secondary btn-sm" >Logout</button>
        </Link>
    </div>
  }
  else {
    return <h1>Welcome 😀</h1>
  }
}


export default LoginControl;
