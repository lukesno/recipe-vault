import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Main from './Main.js';

function Home() {
  return (
    <div>
        <h1>Welcome to Recipe Vault!</h1>

        {/* This is a button that will direct the user to the main page */}
        <Link to="main">Get Started </Link>
        
    </div>


  );
}

export default Home;
