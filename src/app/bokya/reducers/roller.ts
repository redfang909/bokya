import { combineReducers } from 'redux'
import {
  SET_PLAY,
  SET_LAST,
} from './../actions/actionTypes'
import Member from 'src/app/models/member'

function play(state: boolean = false, action) {
  switch (action.type) {
    case SET_PLAY:  
      return action.payload    
    default:
      return state
  }
}

function last(state: Member = null, action) {
  switch (action.type) {
    case SET_LAST:  
      return action.payload    
    default:
      return state
  }
}

const RollerReducer = combineReducers({
  play,
  last,
})

export default RollerReducer