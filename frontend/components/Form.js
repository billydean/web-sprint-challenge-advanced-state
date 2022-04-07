import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
	const { postQuiz, setQuiz, resetForm, inputChange, form } = props;
  const onChange = evt => {
	const {value,id} = evt.target;
	inputChange({
		...form,
		[id]:value,
	})
  }

  const onSubmit = evt => {
	evt.preventDefault();
	setQuiz({
		question: form.newQuestion,
		trueAnswer: form.newTrueAnswer,
		falseAnswer: form.newFalseAnswer,
	})
	postQuiz({
		question_text: form.newQuestion,
		true_answer_text: form.newTrueAnswer,
		false_answer_text: form.newFalseAnswer
	});
	resetForm();
  }

  const isDisabled =()=>{
	  if (form.newQuestion.trim().length > 0 && form.newTrueAnswer.trim().length > 0 && form.newFalseAnswer.trim().length > 0) {
		  return false
	  } else { return true }
  }
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={form.newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={form.newFalseAnswer}/>
      <button disabled={isDisabled()} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}
const mapStateToProps = state => {
	return {
		form : state.form,
	}
}
export default connect(mapStateToProps, actionCreators)(Form)
