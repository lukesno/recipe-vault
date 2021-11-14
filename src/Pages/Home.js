import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Main from './Main.js';
import './Home.css';
import logo from './transparent_logo.png';

function Home() {
  return (
    <div className="home-container">
        <div className="image-container" />
        <div className="overlay-container"></div>

        <div className="home-title">
            <div className="home-title-text">
              <img style={{width: "120px", height: "auto"}} src={logo}></img>
              <b>Recipe Vault</b>
            </div>
            <div style={{fontSize: "25px", color: "#ffffff"}}>
              Left over groceries? No problem. 
            </div>
            <div style={{fontSize: "25px", color: "#ffffff"}}>
              We'll take care of that for you :)
            </div>
            <div className="home-navigate">
              <Link to="main" class="home-button">Get Started </Link>
            </div>        
        </div>
    </div>


  );
}

export default Home;