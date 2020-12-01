import React, { useState,useEffect } from "react";
import "./Restaurant.css"
import RecipeReviewCard from "./card";
import Header from "./Header";
import { useLocation,useHistory } from "react-router-dom";


function Restaurant() {
    const APP_KEY='c6d2064244bc8b8d1c9ae351caf89fb6';
    const APP_ID='646b6d03';
    const location = useLocation();
    const [recipes,setRecipes]=useState([])
    const [search,setSearch]=useState("")
    const [query,setQuery]=useState("chicken")

    const history = useHistory();

    window.sessionStorage.setItem('increment',0)

    useEffect(() => {
        getRecipes();
    },[query]);

    const getRecipes = async () => {
        const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data= await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
        console.log("user and state is",location.state)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
    }

    const  userOrder = e => {
        var newVar=''
        var Items=[]
        console.log(window.sessionStorage)
        for (var i=1;i<window.sessionStorage.length;i++) {
            newVar=newVar+String(1)
            Items.push(window.sessionStorage.getItem(newVar))
        }

        var itemList=Items.join(',')

        const data1={"FName":location.state.detail,"items":itemList}

    fetch('https://us-central1-fluent-timing-269017.cloudfunctions.net/order-function', {
      method: 'POST', 
      mode:'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data1)
      })
    .then(response => {
      history.push("/success")
    })
    .catch((error) => {
      console.error('Error:', error);
    });
        
    }

    
    return (
        <div>
        <Header user={location.state.detail} status={'true'}/>
        <div className="center">
            <input  style={{margin:'15px'}} type="text" placeholder="Enter the Item" value={search} onChange={updateSearch}/>
            <button className="resbutton" type="submit" onClick={getSearch}>Search</button>
        </div>
        <div>
            {recipes.map((recipe,index) => (
                <div className="cards">
                <RecipeReviewCard 
                    key={index}
                    id={index}
                    label={recipe.recipe.label}
                    image={recipe.recipe.image}
                    ingredient={recipe.recipe.ingredientLines}
                />
                </div>
            ))}
        </div>
        <div className="center1">
            <button className="resbutton" type="submit" onClick={userOrder}>Submit</button>
        </div>
        </div>
    );

}

export default Restaurant;