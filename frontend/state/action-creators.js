import {
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  RESET_FORM,
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER} from './action-types'
// ❗ You don't need to add extra action creators to achieve MVP
//wheel
export function moveClockwise() { 
  return { type: MOVE_CLOCKWISE }
} 

//wheel
export function moveCounterClockwise() { 
  return { type: MOVE_COUNTERCLOCKWISE }
}

//quiz
export function selectAnswer({firstOption, secondOption}) {
  return { 
    type: SET_SELECTED_ANSWER,
    payload: {firstOption, secondOption}    
  }
 }

//infoMessage
export function setMessage() {
  return { type: SET_INFO_MESSAGE }
}

//quiz
export function setQuiz({
	question, trueAnswer, falseAnswer
}) { 
  return { type: SET_QUIZ_INTO_STATE, payload: {
	  question, trueAnswer, falseAnswer
  } }
}

//form
export function inputChange({
  newQuestion,
  newTrueAnswer,
  newFalseAnswer,
}) {
  return { type: INPUT_CHANGE
    , payload: {
    newQuestion,
    newTrueAnswer,
    newFalseAnswer,
  } 
}
 }
//form
export function resetForm() {
  return { type: RESET_FORM }
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
