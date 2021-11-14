import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import Recipe from "../Components/Recipe.js";
import './Result.css';
import { Col, Row } from "react-bootstrap";

function Result() {

    // 1. useEffect to make API request using current ingredients in firebase
    //    Trigger loading screen
    // 2. With recipe IDs received, make API request to obtain detailed data for each
    //    recipe found
    // 3. Map each data object to a Recipe component
    const fake = {
        //get these from detailed recipe search
        title: "Cranberry Cupcakes",
        image: "https://spoonacular.com/recipeImages/640351-556x370.jpg",
        summary: "If you want to add more <b>American</b> recipes to your repertoire, Cranberry \"Cupcakes might be a recipe you should try. This recipe makes 24 servings with <b>95 calories</b>, <b>1g of protein</b>, and <b>2g of fat</b> each. For <b>32 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. 1 person has made this recipe and would make it again. A mixture of walnuts, raspberry flavor gelatin, apple, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free and dairy free</b> diet. It is brought to you by Foodista. With a spoonacular <b>score of 10%</b>, this dish is very bad (but still fixable). Try <a href=\"https://spoonacular.com/recipes/cranberry-cupcakes-371129\">Cranberry Cupcakes</a>, <a href=\"https://spoonacular.com/recipes/cranberry-orange-cupcakes-572520\">Cranberry-Orange Cupcakes</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-nut-cupcakes-129022\">Cranberry Nut Cupcakes</a> for similar recipes.",
        instructions: "Drain pineapple, reserving juice.\nPut the gelatin (just the powder) in a large bowl.\nAdd enough water to juice to measure 2  cups; pour into saucepan and bring to a boil.\nPour the water into the gelatin mix and stir for 2 minutes until completely dissolved.\nStir in the pineapple, cranberry sauce, nuts, and apples.\nSpoon into 24 paper-lined muffin cups.\nRefrigerate for 2  hours or until firm.\n\n\n\nRemove desserts from liners before serving.",
        analyzedInstructions: 
            {steps: [
                {
                    number: 1,
                    step: "Preheat the oven to 350 degrees and grease or butter a 913 glass baking dish.",
                },
                {
                    number: 2,
                    step: "In a large bowl, toss together the chopped apples, cranberries and sugar.",
                },
                {
                    number: 3,
                    step: "Let stand for a few minutes then pour into the baking dish.",
                },
                {
                    number: 4,
                    step: "Dot the mixture with the 1/2 stick of cubed butter.",
                },
                {
                    number: 5,
                    step: "In a medium bowl, combine the oats, brown sugar and flour.",
                },
                {
                    number: 6,
                    step: "Sprinkle evenly over the cranberries and apples in the baking dish.  Gently pour the melted butter over the top.",
                },
                {
                    number: 7,
                    step: "Cover with aluminum foil and bake for 35 minutes.",
                },
                {
                    number: 8,
                    step: "Remove the foil and bake for an additional 15 minutes, or until the oat topping is nicely browned.",
                },
                {
                    number: 9,
                    step: "Serve warm as a side or for dessert with a scoop of vanilla ice cream.",
                },
                
            ]},

        //get these from ingredients search
        usedIngredientCount: 1,
        missedIngredientCount: 3,
        missedIngredients: [{
                                name: "cranberries", 
                                image: "https://spoonacular.com/cdn/ingredients_100x100/cranberries.jpg",
                            }, 
                            {
                                name: "unsalted butter",
                                image: "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
                            }, 
                            {
                                name: "oats",
                                image: "https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg",
                            }],
        usedIngredients: [{
                            name: "granny smith apples",
                            image: "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png",
                          }],

    }

    const fakeArr = [fake, fake, fake, fake, fake, fake]
    const rows = fakeArr.reduce((rows, key, index) => {
        return (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
    }, []);

    return (
        <div>
            <h1>Recipes Retrieved</h1>
            <div>
                {rows.map(row => {
                  return(             
                   <Row>
                    {row.map(col => (<Col><Recipe data={col}></Recipe></Col>))}
                   </Row>       
                  );
                })}
            </div>
            
        </div>
        
    );
}

export default Result;
