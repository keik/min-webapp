import React from 'react'
import ReactDOM from 'react-dom'

import App from '~/lib/share/components/app'

ReactDOM.render(
  <App {...global.APP_PROPS} />,
  document.getElementById('app')
)
