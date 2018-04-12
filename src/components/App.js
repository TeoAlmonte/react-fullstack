import React, { Component } from 'react'
import Header from './Header'

class App extends Component {
  state = {
    pageHeader: 'This Message'
  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
      </div>
    )
  }
}

export default App