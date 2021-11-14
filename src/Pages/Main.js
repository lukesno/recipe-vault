import React from "react";
import "./Main.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Main() {
  return (
    <div className="main-container">
      	<title>Recipe Vault Main</title>
        <h1>What's in the Fridge?</h1>
      <div className="empty">
        
      </div>
      <h2>Oops! Looks like you don't have any ingredients. Click the button to get ingredients.</h2>

        {/* This is a button that will retrieve the ingredients in your refrigerator */}
        {/* GET request made to Raspberry PI here */}
        {/* Once we get data from the GET request, populate a list component that users can dynamically add and remove items */}
      
      <div className="ingredient button">
        <button>Get Ingredients</button>
      </div>

        {/* Make this button only clickable when user has ingredients */}
      <div className="ingredient button">
        <button>Get Recipes</button>
      </div>

    </div>


  );
}

export default Main;
