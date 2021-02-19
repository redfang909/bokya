import {connect} from 'react-redux'
import LottoComponent from '../components/Lotto'
import Lotto from 'src/app/class/Lotto'

const mapStateToProps = (state) => { 
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLottoOptions: () => {
      const { getDetails } = new Lotto()
      return getDetails()
    }
  }
}

const LotoContainer = connect(mapStateToProps, mapDispatchToProps)(LottoComponent)

export default LotoContainer
