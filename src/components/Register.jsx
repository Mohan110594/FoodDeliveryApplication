import React,{useState} from "react";
import { formatDiagnostic } from "typescript";
import Header from "./Header";


function Register() {

  const [regData,setRegData]=useState({
    fName:"",
    password:"",
    confirm_password:""
  })

  const [title,settitle]=useState("Hello")

  function handleChange(e) {
    const { name, value } = e.target;

    setRegData(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function regSubmit(e) {
    e.preventDefault();
    // regData.fName,regData.password,regData.confirm_password

    if (regData.password===regData.confirm_password) {

      const data1={"FName":regData.fName,"Password":regData.password}

      fetch('https://us-central1-fluent-timing-269017.cloudfunctions.net/register-function-1', {
        method: 'POST', 
        mode:'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data1)
        })
      .then(response => {
        console.log("Response is",response)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      setRegData({
        fName:"",
        password:"",
        confirm_password:""
      })
      settitle("User added successfully")

    }
    else {
      settitle("Passwords doesnot match")
    }
    
  }
    
    return (
      <div>
      <div>
        <Header />
      </div>
        <div className="container">
      <h1>{title}</h1>
      <form>
        <input name="fName" placeholder="First Name" value={regData.fName} onChange={handleChange}/>
        <input name="password" placeholder="password" value={regData.password} onChange={handleChange}/>
        <input name="confirm_password" placeholder="confirm password" value={regData.confirm_password} onChange={handleChange}/>
        <button class="btn btn-secondary btn-sm" onClick={regSubmit}>Register</button>
        
      </form>
    </div>
    </div>
    )
}

export default Register;