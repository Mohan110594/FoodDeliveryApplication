import React from "react";
import { formatDiagnostic } from "typescript";


function Register() {
    
    return (
        <div className="container">
      <h1>Hello</h1>
      <form>
        <input name="fName" placeholder="First Name"/>
        <input name="lName" placeholder="Last Name"/>
        <input name="email"  placeholder="Email" /> 
        <input name="password" placeholder="password"/>
        <input name="confirm password" placeholder="confirm password"/>
        <button>Submit</button>
        
      </form>
    </div>
    )
}

export default Register;