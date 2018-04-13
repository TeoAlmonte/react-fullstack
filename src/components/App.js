import React, { Component } from 'react'
import Header from './Header'
import ContestList from './ContestList'

class App extends Component {
  state = {
    pageHeader: 'This Message',
    contests: this.props.initialContests
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.state.contests}/>
      </div>
    )
  }
}

export default App