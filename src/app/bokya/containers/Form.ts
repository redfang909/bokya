import { getMembers, getPlay } from './../selectors/member';
import {connect} from 'react-redux'
import { selectDetail } from './../actions/action'
import { addMember } from './../actions/action'
import { getDetails } from '../selectors/member'
import FormComponent from '../components/Form'
import Member from 'src/app/models/member'

const mapStateToProps = (state) => { 
  return {
    details: getDetails(state.members),
    members: getMembers(state.members),
    startPlay: getPlay(state.roller),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMember: (member: Member) => {       
      dispatch(addMember(member))
    },
    onSelectDetail: (id: number) => {       
      dispatch(selectDetail(id))
    },
  }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(FormComponent)

export default FormContainer
