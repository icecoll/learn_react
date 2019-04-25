import React, { Component } from 'react'

class Props extends Component {
  render() {
    return(
    <div>
      <h1>props example</h1>
      <p>{this.props.content}</p>
    </div>
    )
  }
}

export default Props
