import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators'
function Wheel(props) {
  const { moveClockwise, moveCounterClockwise, wheel } = props;
  const clockHandler =()=>{
    moveClockwise();
  }
  const counterClockHandler=()=>{
    moveCounterClockwise();
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${wheel.classes[0]}`} style={{ "--i": 0 }}>{wheel.content[0]}</div>
        <div className={`cog ${wheel.classes[1]}`} style={{ "--i": 1 }}>{wheel.content[1]}</div>
        <div className={`cog ${wheel.classes[2]}`} style={{ "--i": 2 }}>{wheel.content[2]}</div>
        <div className={`cog ${wheel.classes[3]}`} style={{ "--i": 3 }}>{wheel.content[3]}</div>
        <div className={`cog ${wheel.classes[4]}`} style={{ "--i": 4 }}>{wheel.content[4]}</div>
        <div className={`cog ${wheel.classes[5]}`} style={{ "--i": 5 }}>{wheel.content[5]}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={()=>counterClockHandler()}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={()=>clockHandler()}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wheel: state.wheel,
  }
}
export default connect(mapStateToProps, actionCreators)(Wheel)
