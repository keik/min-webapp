import React from 'react'
import ReactDOM from 'react-dom'
import AppView from '../share/app'

ReactDOM.render(React.createElement(AppView, global.APP_PROPS), document.getElementById('app'))
