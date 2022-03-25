// ❗ You don't need to add extra reducers to achieve MVP
import { ReactReduxContext } from 'react-redux';
import { combineReducers } from 'redux'
import {
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  RESET_FORM,
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER} from './action-types'

const initialWheelState = { position: 0, classes: ["active", null, null, null, null, null], content: ["B", null, null, null, null, null] }
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      switch (state.position) {
        case 0:
          return {
            position: 1,
            classes: [null, "active", null, null, null, null],
            content: [null, "B", null, null, null, null]
          }
        case 1:
          return {
            position: 2,
            classes: [null, null, "active", null, null, null],
            content: [null, null, "B", null, null, null]
          }
        case 2:
          return {
            position: 3,
            classes: [null, null, null, "active", null, null],
            content: [null, null, null, "B", null, null]
          }
        case 3: 
          return {
            position: 4,
            classes: [null, null, null, null, "active", null],
            content: [null, null, null, null, "B", null]
          }
        case 4:
          return {
            position: 5,
            classes: [null, null, null, null, null, "active"],
            content: [null, null, null, null, null, "B"]
          }
        case 5:
          return initialWheelState;
        default: return state;
      }
    case MOVE_COUNTERCLOCKWISE:
      switch (state.position) {
        case 0:
          return {
            position: 5,
            classes: [null, null, null, null, null, "active"],
            content: [null, null, null, null, null, "B"]
          }
        case 1:
          return initialWheelState;
        case 2:
          return {
            position: 1,
            classes: [null, "active", null, null, null, null],
            content: [null, "B", null, null, null, null]
          }
        case 3: 
          return {
            position: 2,
            classes: [null, null, "active", null, null, null],
            content: [null, null, "B", null, null, null]
          }
        case 4:
          return {
            position: 3,
            classes: [null, null, null, "active", null, null],
            content: [null, null, null, "B", null, null]
          }
        case 5:
          return {
            position: 4,
            classes: [null, null, null, null, "active", null],
            content: [null, null, null, null, "B", null]
          }
        default: return state;
      }  
    default: return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
