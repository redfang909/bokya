import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import BokyaContainer from './bokya/containers/Bokya'
import LottoContainer from './lotto/containers/Lotto'
import '../scss/main.scss';

if(module && module.hot) module.hot.accept()

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }      
      <> { /* your usual react-router v4/v5 routing */ }  
        <Switch>
          <Route exact path="/" component={BokyaContainer} />
          <Route exact path="/lotto" component={LottoContainer} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
