import * as React from 'react'
import HeaderContainer from '../containers/Header'
import ListContainer from '../containers/List'

interface Props {
  onInit: () => void
}
const{ useEffect } = React

const BokyaComponent = ({ onInit }: Props) => {
  useEffect(() => {
    onInit()
  }, [])

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Bokya App</a>
        <div className="float-right warn">
          Just for fun only.
        </div>     
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <HeaderContainer/>
            <ListContainer/>
          </div>
        </div>
      </div>       
    </div>
  )
}

export default BokyaComponent