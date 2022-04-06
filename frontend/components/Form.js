import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
	const { setQuiz, resetForm, inputChange, form } = props;
	// check whether "id" works here, or whether you should add "names" to form inputs
  const onChange = evt => {
	  // evt.preventDefault() ?
	{value,id} = evt.target;
	inputChange({
		[id]:value;
	})
  }

  const onSubmit = evt => {
	// evt.preventDefault() ?
	evt.preventDefault();
	setQuiz({
		question: form.newQuestion,
		trueAnswer: form.newTrueAnswer,
		falseAnswer: form.newFalseAnswer,
	})
	resetForm();
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}
const mapStateToProps = state => {
	return {
		form : state.form,
	}
}
export default connect(mapStateToProps, actionCreators)(Form)
