import React from "react";


function Restaurant() {
    const API_KEY='ca66a747d24f333204e48896d4eff909';
    
    return (
        <div className="w3-container">
            <form >
                <input style={{margin:'15px'}} type="text" placeholder="Enter the location" />
                <button className="resbutton" type="submit">Search</button>
            </form>
        </div>
    );

}

export default Restaurant;