const React = require('react')
const ReactDOMServer = require('react-dom/server')

function renderFullPage(componentClass, props, entry) {
  const appHTML = ReactDOMServer.renderToString(React.createElement(componentClass, props))
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>min-webapp</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <div id="app">${appHTML}</div>
    <script>APP_PROPS = ${JSON.stringify(props)}</script>
    <script src="/${entry}.js"></script>
  </body>
</html>
`
}

module.exports = {
  renderFullPage
}
