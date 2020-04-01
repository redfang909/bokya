import { connect } from 'react-redux'
import { deleteMember, setLast, setPlay } from '../actions/action'
import { getMembers, getPlay } from './../selectors/member'
import ListComponent from '../components/List'
import Member from 'src/app/models/member'

const mapStateToProps = (state) => { 
  return {
    members: getMembers(state.members),
    startPlay: getPlay(state.roller),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteMember: (id: string) => {
      dispatch(deleteMember(id))
    },
    setLastMember: (member: Member) => {      
      dispatch(setLast(member))
      dispatch(setPlay(false))
    },
  }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(ListComponent)

export default ListContainer
