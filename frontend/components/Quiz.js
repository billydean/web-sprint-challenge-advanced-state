import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import * as actionCreators from '../state/action-creators';

function Quiz(props) {
  const {postAnswer, selectedAnswer, selectAnswer, quiz, fetchQuiz} = props;
  const [disabled, setDisabled] = useState(true)
  const [selected, setSelected] = useState("")
  
  const selectHandler =(e)=> {
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
        setSelected(quiz.true_id)
        break;
      case "two":
        if (selectedAnswer.secondOption.class === "answer") {
          opt1 = {class: "answer", text: "Select"};
          opt2 = {class: "answer selected", text: "SELECTED" };
          selectAnswer(opt1,opt2)
        }
        setSelected(quiz.false_id)
        break;
    }
    setDisabled(false);
  }
  const submitHandler =() => {
    postAnswer({
      quiz_id: quiz.quiz_id,
      answer_id: selected
    })
    fetchQuiz();
  }

	useEffect(()=>{
    if (quiz.question) {
      console.log('no need')
    } else {
      fetchQuiz()
    }
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

            <button id="submitAnswerBtn" disabled={disabled} onClick={()=>{submitHandler()}}> Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {
    selectedAnswer: state.selectedAnswer,
    quiz: state.quiz,
  }
}
export default connect(mapStateToProps, actionCreators)(Quiz)