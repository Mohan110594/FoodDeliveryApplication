import React,{useState} from "react";
import "./Login.css"
import {Link,useHistory} from "react-router-dom"
import axios from "axios";
import Header from "./Header";


function Login() {

  const [userDetails,setUser]=useState({
    fName:"",
    password:""
  })

  const [title,settitle]=useState("Hello")
  const history = useHistory();

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

    

    axios.post(`https://us-central1-fluent-timing-269017.cloudfunctions.net/login-function`,{
        mode:'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => {
      const arrayData=response['data']['result']
      // console.log("arr Data is",arrayData)
      var found='False'
      var found1='False'
      var i
      for (i=0;i<arrayData.length;i++) {
          var jsonData=arrayData[i]

          // console.log(userDetails.fName,userDetails.password,jsonData['fName'],jsonData['password'])

          if (userDetails.fName===jsonData['fName'] && userDetails.password===jsonData['password']) {
            found='True'
          }
          else if (userDetails.fName===jsonData['fName'] && userDetails.password!==jsonData['password']) {
            found1='True' 
          }
      }

      if (found==='True') { 
        history.push({
          pathname: '/restaurant',
          state: { detail: userDetails.fName}
      })
        settitle('user logged in successfully')
      }
      else if (found1==='True') {
        settitle('incorrect password')
      }
      else {
        settitle('User not present please Register')
      }


      
    })
    .catch((error) => {
        console.error("Error",error)
    })

    
    



    // fetch('https://us-central1-fluent-timing-269017.cloudfunctions.net/login-function', {
    //   method: 'POST', 
    //   mode:'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   }
    //   })
    // .then(response => {
    //   console.log('Success:', response);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

    // console.log("Name and pass are",userDetails.fName,userDetails.password)

  }
    
    return (
      <div>
      <div>
        <Header/>
      </div>
        <div className="Login" className="container">
      <h1>{title}</h1>
      <form>
        <input name="fName" placeholder="First Name" value={userDetails.fName} onChange={handleChange}/>
        <input name="password" placeholder="password" value={userDetails.password} onChange={handleChange}/>
        <button style={{"margin-right": 16}} className="btn btn-secondary btn-sm" onClick={userLogin}>Login</button>
        <Link to="/register">
        <button className="btn btn-secondary btn-sm">Register</button>
        </Link>
      </form>
    </div>
    </div>
    )
}

export default Login;