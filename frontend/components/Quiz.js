import React from 'react'
import {connect} from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Quiz(props) {
  const {firstOption, secondOption, selectAnswer} = props;
  console.log(firstOption, secondOption);
  const selectHandler =(e)=> {
    let opt1 = {class: "answer", text: "Select"};
    let opt2 = {class: "answer", text: "Select"};
    console.log(e.target);
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

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {
    
      firstOption: state.selectedAnswer.firstOption,
      secondOption: state.selectedAnswer.secondOption,
    
  }
}
export default connect(mapStateToProps, actionCreators)(Quiz)