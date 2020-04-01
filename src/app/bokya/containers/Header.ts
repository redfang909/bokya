import {connect} from 'react-redux'
import { getMembers, getPlay, getLast } from './../selectors/member'
import { setPlay } from './../actions/action'
import { deleteMember } from '../actions/action'
import HeaderComponent from '../components/Header'

const mapStateToProps = (state) => { 
    return {
        members: getMembers(state.members),
        startPlay: getPlay(state.roller),
        last: getLast(state.roller),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveMember: (id: string) => {
          dispatch(deleteMember(id))
        },
        onStartPlay: (val: boolean) => {
          dispatch(setPlay(val))
        },
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

export default HeaderContainer
