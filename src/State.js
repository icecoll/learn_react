import React, { Component } from 'react'

class ChildComponent extends Component {
  render() {
    return <div>child state: {this.props.count}</div>
  }
}

export default class State extends Component {
  constructor() {
    super()
    this.state = { count: 1 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(preState => {
      return { count: preState.count + 1 }
    })
  }

  render() {
    return(
      <div>
        <h1>state example</h1>
        <div>parent state: {this.state.count}</div>
        <ChildComponent count={this.state.count} />
        <input type='button' value="+" onClick={this.handleClick} />
      </div>
    )
  }
}
