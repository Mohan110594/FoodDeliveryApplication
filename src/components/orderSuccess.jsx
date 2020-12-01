import React from "react";
import Header from "./Header";

function orderSuccess(props) {

 
 // console.log("status is ",props.status)
 // console.log("name is ",props.user)

 return (
     <div>
   <div>
       <Header/>
    </div>
    <div className="textalign">
       <h2>Order has been placed Successfully.</h2>
       <h3>Thanks for using BuffEats</h3>
       <h3>😀</h3>
    </div>
    </div>
 );
}

export default orderSuccess;
