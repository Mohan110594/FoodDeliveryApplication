import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Restaurant from "./Restaurant"
import orderSuccess from "./orderSuccess";
export default function App() {
  

  return (
    <div>
    <Router>
    <div>
      {/* <Route exact='true' path="/" component={Restaurant}/> */}
      <Route exact='true' path="/" component={Login}/>
      <Route exact='true' path="/register" component={Register}/>
      <Route exact='true' path="/restaurant" component={Restaurant}/>
      <Route exact='true' path="/success" component={orderSuccess}/>
    </div>
    </Router>
    </div>
    
    
  );
}
