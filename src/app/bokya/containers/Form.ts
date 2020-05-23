import Member from 'src/app/class/Member'
import { getMembers, getPlay, getLast } from './../selectors/member'
import {connect} from 'react-redux'
import { selectDetail, setDetails, setLast } from './../actions/action'
import { addMember } from './../actions/action'
import { getDetails } from '../selectors/member'
import FormComponent from '../components/Form'
import MemberM from 'src/app/models/member'

const mapStateToProps = (state) => { 
  return {
    details: getDetails(state.members),
    members: getMembers(state.members),
    startPlay: getPlay(state.roller),
    last: getLast(state.roller)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMember: (member: MemberM) => {       
      dispatch(addMember(member))
    },
    onSelectDetail: (id: number) => {       
      dispatch(selectDetail(id))
    },
    onRestartData: () => {
      const { getDetails } = new Member()
      dispatch(setDetails(getDetails()))
      dispatch(setLast(null))
    }
  }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(FormComponent)

export default FormContainer
