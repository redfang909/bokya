import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import MemberReducer from './bokya/reducers/member'
import RollerReducer from './bokya/reducers/roller'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  members: MemberReducer, 
  roller: RollerReducer,
})

export default createRootReducer
