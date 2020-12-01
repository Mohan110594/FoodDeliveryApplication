import React from "react";
import { formatDiagnostic } from "typescript";


function Register() {


    
    return (
        <div className="container">
      <h1>Hello</h1>
      <form>
        <input name="fName" placeholder="First Name"/>
        <input name="password" placeholder="password"/>
        <input name="confirm password" placeholder="confirm password"/>
        <button class="btn btn-secondary btn-sm" >Register</button>
        
      </form>
    </div>
    )
}

export default Register;