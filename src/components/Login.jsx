import React from "react";
import { formatDiagnostic } from "typescript";
import "./Login.css"


function Login() {
    
    return (
        <div className="Login" className="container">
      <h1>Hello</h1>
      <form>
        <input name="fName" placeholder="First Name"/>
        <input name="password" placeholder="password"/>
        <button>Submit</button>
      </form>
    </div>
    )
}

export default Login;