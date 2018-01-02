import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import Home from '../components/Home'

class HomePage extends React.Component {
  render() {
    return (
      <Home />
    )
  }
}

export default (HomePage as any as React.StatelessComponent<RouteComponentProps<any>>)
