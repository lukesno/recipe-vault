import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import RecipeModal from './RecipeModal.js';

function Instruction(props) {
    const number = props["number"]
    const desc = props["desc"]
    
    return (
        <div style={{display: "flex"}}>
            <span>{number}.</span>
            <p style={{paddingLeft: "5px"}}>{desc}</p>
        </div>
    );
    
}

export default Instruction;
