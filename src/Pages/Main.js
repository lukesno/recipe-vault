import React, { useState } from "react";
import "./Main.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { ListGroup, Button } from 'react-bootstrap';

function Main() {

  const [list, setList] = useState([])
  const [premadeList, setPremadeList] = useState(["apple", "tangerine", "bread", "banana", "strawberry"])

  return (
    <div className="main-container">
      <h1 style={{paddingTop: "15px"}}>What's in your Fridge?</h1>
      <div className="list-container">
        {list.length == 0 ? 
        <div>
          <img style={{width: "800px", height: "auto"}} src="https://fazewp-fazemediainc.netdna-ssl.com/cms/wp-content/uploads/2015/06/o-EMPTY-FRIDGE-facebook.jpg"></img>
          <h2>Oops! Looks like you don't have any ingredients. Click the button to get ingredients.</h2>
        </div>
        :
        <ListGroup style={{marginTop: "10%", marginBottom: "10%"}}>
          {list.map((item) => {
            return(
              <ListGroup.Item>{item}</ListGroup.Item>
            );
            
          })}
        </ListGroup>
        }

      </div>

      

        {/* This is a button that will retrieve the ingredients in your refrigerator */}
        {/* GET request made to Raspberry PI here */}
        {/* Once we get data from the GET request, populate a list component that users can dynamically add and remove items */}
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <Button onClick={() => {
          setTimeout(() => {
            setList(premadeList);
          }, 10000);
        }} style={{width: "300px"}} variant="outline-secondary">Get Ingredients</Button>
        
        {/* Make this button only clickable when user has ingredients */}
        <Button onClick={() => {
          console.log("hi")
          window.location.href='http://localhost:3000/main/result'
        }} style={{width: "300px"}} variant="outline-secondary">
          Get Recipes
        </Button>

      </div>



    </div>


  );
}

export default Main;
