import React from 'react'
import {connect} from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Quiz(props) {
  const {selectedAnswer, selectAnswer} = props;
  const {firstOption, secondOption} = selectedAnswer;
  
  let disabled = true;
  const selectHandler =(e)=> {
    let opt1 = {class: "answer", text: "Select"};
    let opt2 = {class: "answer", text: "Select"};
	// test to see if "target.id" is even "one" or "two"!
    console.log(e.target.id);
    switch (e.target.id) {
      case "one": 
        if (firstOption.class === "answer") {
          opt1 = {class: "answer selected", text: "SELECTED" };
          opt2 = {class: "answer", text: "Select"}
          selectAnswer({opt1,opt2})
        }
      case "two":
        if (secondOption.class === "answer") {
          opt1 = {class: "answer", text: "Select"};
          opt2 = {class: "answer selected", text: "SELECTED" };
          selectAnswer({opt1,opt2})
        }
    }
	disabled = false;
  }
  	
	
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>
            <div id="quizAnswers">
              <div className={firstOption.class} >
                A function
                <button id="one" onClick={()=>selectHandler}>
                  {firstOption.text}
                </button>
              </div>

              <div className={secondOption.class}>
                An elephant
                <button id="two" onClick={(e)=>selectHandler(e)}>
                  {secondOption.text}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={disabled}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {
    selectedAnswer : state.selectedAnswer,
  }
}
export default connect(mapStateToProps, actionCreators)(Quiz)