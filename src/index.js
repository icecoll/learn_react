import React from 'react'
import ReactDOM from 'react-dom'
import Css from './Css'
import Props from './Props'
import State from './State'

ReactDOM.render(
  <div>
    <Css />
    <Props content="value of props.content" />
    <State />
  </div>, document.getElementById('root')
)
