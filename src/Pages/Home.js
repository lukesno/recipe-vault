import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Main from './Main.js';
import './Home.css';

function Home() {
  return (
    <html>
     <head>
      	<title>Recipe Vault Home</title>

     </head>
     <body>
        <h1>Welcome to Recipe Vault!</h1>
      
    <div className="hero">
      {/* This is a button that will direct the user to the main page */}
      <Link to="main"class="button">Get Started </Link>
    </div>
     </body>
    </html>

  );
}

export default Home;