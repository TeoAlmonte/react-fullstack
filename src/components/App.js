import React, { Component } from 'react'
import Header from './Header'
import ContestPreview from './ContestPreview'

import data from '../testData'

class App extends Component {
  state = {
    pageHeader: 'This Message',
    contests: []
  }
  componentDidMount() {
    this.setState({
      contests: data.contests
    })
  }
  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview {...contest} key={contest.id} />
          )}
        </div>
      </div>
    )
  }
}

export default App