import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Quiz(props) {
  const {selectedAnswer, selectAnswer, quiz, fetchQuiz} = props;
 
  
  // let disabled = true;
  // const enabler =()=> {
  //   if (disabled) {
  //     return true 
  //   } else {return false}

  // }
  const selectHandler =(e)=> {
    disabled = false;
    let opt1 = {class: "answer", text: "Select"};
    let opt2 = {class: "answer", text: "Select"};
	// test to see if "target.id" is even "one" or "two"!
    switch (e.target.id) {
      case "one": 
        if (selectedAnswer.firstOption.class === "answer") {
          opt1 = {class: "answer selected", text: "SELECTED" };
          opt2 = {class: "answer", text: "Select"}
          selectAnswer(opt1,opt2)
        }
        
        break;
      case "two":
        if (selectedAnswer.secondOption.class === "answer") {
          opt1 = {class: "answer", text: "Select"};
          opt2 = {class: "answer selected", text: "SELECTED" };
          selectAnswer(opt1,opt2)
        }
        
        break;
    }
    
	 console.log(disabled);
  }
  	
	useEffect(()=>{
    fetchQuiz()
  }, [])

  return (
    <div id="wrapper">
      {
        quiz.question ? (
          <>
            <h2>{quiz.question}</h2>
            <div id="quizAnswers">
              <div className={selectedAnswer.firstOption.class}>
                {quiz.trueAnswer}
                <button id="one" onClick={(e)=>selectHandler(e)}>
                  {selectedAnswer.firstOption.text}
                </button>
              </div>

              <div className={selectedAnswer.secondOption.class}>
                {quiz.falseAnswer}
                <button id="two" onClick={(e)=>selectHandler(e)}>
                  {selectedAnswer.secondOption.text}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={false}> Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {
    selectedAnswer: state.selectedAnswer,
    quiz: state.quiz
  }
}
export default connect(mapStateToProps, actionCreators)(Quiz)