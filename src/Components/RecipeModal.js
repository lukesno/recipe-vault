import {Button, Modal} from 'react-bootstrap/';
import ReactHtmlParser from 'react-html-parser';
import Instruction from './Instruction.js';
import './Recipe.css';

function RecipeModal(props) {
    const data = props.data;

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
              <img className="recipe-image" style={
                {borderTopLeftRadius: "calc(0.3rem- 1px)"}} src={data.image} />
              <div style={{width: "50%", textAlign: "center"}}>
                <b>{data.title}</b>
              </div>
            </div>

            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          
      
          <h4 style={{marginTop: "24px"}}>Summary</h4>
          <p>
              {ReactHtmlParser(data.summary)}
          </p>

          <h4 style={{marginTop: "24px"}}>Ingredients you have:</h4>
          <div style={{display: "flex", justifyContent: "flex-start"}}>
            {data.usedIngredients.map((item) => {
              return (
                <div className="ingredients-container">
                  <img style={{width: "70px", height: "auto"}} src={item.image} />
                  <div>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>
                </div>
              );
            })}
          </div>

          <h4 style={{marginTop: "24px"}}>Ingredients you need:</h4>
          <div style={{display: "flex", justifyContent: "flex-start"}}>
            {data.missedIngredients.map((item) => {
                return (
                  <div className="ingredients-container">
                    <img style={{width: "70px", height: "auto"}} src={item.image} />
                    <div>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>
                  </div>
                );
              })}
          </div>

          <h4 style={{marginTop: "24px"}}>Instructions</h4>
          {data.analyzedInstructions.steps.map(step => {
            return(
              <Instruction number={step.number} desc={step.step}/>
            );
          })}
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default RecipeModal
