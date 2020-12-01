import React from "react";
import { formatDiagnostic } from "typescript";
import Header from "./Header";


function Register() {


    
    return (
      <div>
      <div>
        <Header />
      </div>
        <div className="container">
      <h1>Hello</h1>
      <form>
        <input name="fName" placeholder="First Name"/>
        <input name="password" placeholder="password"/>
        <input name="confirm password" placeholder="confirm password"/>
        <button class="btn btn-secondary btn-sm" >Register</button>
        
      </form>
    </div>
    </div>
    )
}

export default Register;