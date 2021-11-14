import React, { useState } from "react";

import './Recipe.css';
import Button from 'react-bootstrap/Button';
import RecipeModal from './RecipeModal.js';

function Recipe(recipe) {
    const [modalShow, setModalShow] = useState(false);
    const data = recipe["data"];

    console.log(data)
    return (
        <div className="recipe-container">
            <img className="recipe-image" src={data.image} />
            <div className="recipe-text-container">
                <span className="recipe-title">{data.title}</span>
                {/* Button to open modal */}
                <Button variant="primary" 
                 className="recipe-button" 
                 onClick={() => setModalShow(true)}>
                     Learn more
                </Button>
                <RecipeModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={data}
                />
            </div>
        </div>
    );
}

export default Recipe;
