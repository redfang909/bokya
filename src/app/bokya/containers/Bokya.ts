import {connect} from 'react-redux'
import BokyaComponent from '../components/Bokya'
import { setDetails } from '../actions/action'
import Member from 'src/app/class/Member'

const mapStateToProps = (state) => { 
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {
      const { getDetails } = new Member()
      dispatch(setDetails(getDetails()))
    },
  }
}

const BokyaContainer = connect(mapStateToProps, mapDispatchToProps)(BokyaComponent)

export default BokyaContainer
