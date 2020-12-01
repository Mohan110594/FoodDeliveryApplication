import React,{useState} from "react";
// import { formatDiagnostic } from "typescript";
import "./Login.css"
import {Link} from "react-router-dom"


function Login() {

  const [userDetails,setUser]=useState({
    fName:"",
    password:""
  })

  function handleChange(e) {
    const { name, value } = e.target;

    setUser(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function userLogin(e) {
    e.preventDefault();
    setUser({
      fName:"",
    password:""
    })

    

    console.log("Name and pass are",userDetails.fName,userDetails.password)

  }
    
    return (
        <div className="Login" className="container">
      <h1>Hello</h1>
      <form>
        <input name="fName" placeholder="First Name" value={userDetails.fName} onChange={handleChange}/>
        <input name="password" placeholder="password" value={userDetails.password} onChange={handleChange}/>
        <button style={{"margin-right": 16}} className="btn btn-secondary btn-sm" onClick={userLogin}>Login</button>
        <Link to="/register">
        <button className="btn btn-secondary btn-sm">Register</button>
        </Link>
      </form>
    </div>
    )
}

export default Login;