import React, { Component } from 'react'
import Header from './Header'
import ContestPreview from './ContestPreview'

import data from '../testData'

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
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview  key={contest.id} {...contest}/>
          )}
        </div>
      </div>
    )
  }
}

export default App