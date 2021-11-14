import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Main() {
  return (
    <html>
     <head>
      	<title>Recipe Vault Home</title>

     </head>
     <body>
        <h1>You're at the main page! (Remove this later)</h1>

        <div>No ingredients yet! Click the button below to search your refrigerator</div>


        {/* This is a button that will retrieve the ingredients in your refrigerator */}
        {/* GET request made to Raspberry PI here */}
        {/* Once we get data from the GET request, populate a list component that users can dynamically add and remove items */}
        <button>Get Ingredients</button>

        {/* Make this button only clickable when user has ingredients */}

        <button>Get Recipes</button>
      </body>
    </html>


  );
}

export default Main;
