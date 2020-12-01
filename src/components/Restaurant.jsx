import React, { useState,useEffect } from "react";
import "./Restaurant.css"
import RecipeReviewCard from "./card";

function Restaurant() {
    const APP_KEY='c6d2064244bc8b8d1c9ae351caf89fb6';
    const APP_ID='646b6d03';
    const [recipes,setRecipes]=useState([])
    const [search,setSearch]=useState("")
    const [query,setQuery]=useState("chicken")

    useEffect(() => {
        getRecipes();
    },[query]);

    const getRecipes = async () => {
        const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data= await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
    }

    
    return (
        <div>
        <div className="center">
            <input  style={{margin:'15px'}} type="text" placeholder="Enter the Item" value={search} onChange={updateSearch}/>
            <button className="resbutton" type="submit" onClick={getSearch}>Search</button>
        </div>
        <div>
            {recipes.map((recipe,index) => (
                <div className="cards">
                <RecipeReviewCard 
                    // key={index}
                    // id={index}
                    label={recipe.recipe.label}
                    image={recipe.recipe.image}
                    ingredient={recipe.recipe.ingredientLines}
                />
                </div>
            ))}
        </div>
        <div className="center1">
            <button className="resbutton" type="submit" >Submit</button>
        </div>
        </div>
    );

}

export default Restaurant;