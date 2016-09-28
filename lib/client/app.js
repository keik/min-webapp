const React = require('react')
const ReactDOM = require('react-dom')
const AppView = require('../share/app')

ReactDOM.render(React.createElement(AppView, global.APP_PROPS), document.getElementById('app'))
