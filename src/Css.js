import React, { Component } from 'react'

class Css extends Component {
  render() {
    const styles = { fontSize: '40px', color: 'green'};
    return(
    <div>
      <h1 style={{color: 'red'}}>
        css example
      </h1>
      <p style={styles}> css </p>
    </div>
    )
  }
}

export default Css
