import React from 'react'
import ReactDOM from 'react-dom'
import Css from './Css'
import Props from './Props'

ReactDOM.render(
  <div>
    <h1>hello react</h1>
    <Css />
    <Props content="value of props.content" />
  </div>, document.getElementById('root'))
