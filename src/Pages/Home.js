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
    <div className="example">
        <h1>Welcome to Recipe Vault!</h1>
        <img></img>
        {/* This is a button that will direct the user to the main page */}
        <Link to="main">Get Started </Link>
    </div>


  );
}

export default Home;
