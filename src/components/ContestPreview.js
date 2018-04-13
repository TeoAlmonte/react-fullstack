import React, { Component } from 'react'

class ContestPreview extends Component {
  handleClick = () => {
    console.log(`Clicked on ${this.props.contestName}`)
  }
  render() {
    return (
      <div className="ContestPreview link" onClick={this.handleClick}>
      <div>
          {this.props.categoryName}
      </div>
      <div>
          {this.props.contestName}
      </div>
    </div>
    )
  }
}


export default ContestPreview;