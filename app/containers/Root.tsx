import * as React from 'react'
import * as Redux from 'redux'

import { History } from 'history'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import Routes from '../routes'

interface IRootType {
  store: Redux.Store<any>
  history: History
}

function Root({ store, history }: IRootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
