import React,{useState,useEffect} from "react";

function RestaurantDetail (props) {


    return (
    <div>
        <h1>{props.label}</h1>
        <img  src={props.image} alt=''/>
        


    </div>)


}

export default RestaurantDetail;