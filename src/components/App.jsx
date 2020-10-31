import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Restaurant from "./Restaurant"
export default function App() {
  

  return (
    <div>
    <Router>
    <div>
      <Header/>
      <Switch>
      <Route exact='true' path="/" component={Restaurant}/>
      <Route exact='true' path="/logging" component={Login}/>
      <Route exact='true' path="/register" component={Register}/>
      </Switch>
    </div>
    </Router>
    </div>
    
    
  );
}
