import { combineReducers } from 'redux'
import Member from "src/app/models/member"
import Detail from 'src/app/models/detail'

import { 
  ADD_MEMBER, 
  DELETE_MEMBER, 
  SET_DETAILS,
  SELECT_DETAIL,
} from './../actions/actionTypes'

function details(state: Detail[] = [], action) {
  switch (action.type) {
    case SET_DETAILS:      
      return [...state, ...action.payload]
    case SELECT_DETAIL:
      return state.filter(({ id }) => id != action.payload)
    default:
      return state
  }
}

function list(state: Member[] = [], action) {
  switch (action.type) {
    case ADD_MEMBER:
      return [...state, action.payload]
    case DELETE_MEMBER:
      return state.filter(({ id }) => id != action.payload)
    default:
      return state
  }
}

const MemberReducer = combineReducers({
  list,
  details,
})

export default MemberReducer