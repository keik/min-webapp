import { renderToString } from 'react-dom/server'

/**
 * Return full HTML string with React props
 */
export function renderFullPage(Component, opts={}) {
  const content = renderToString(Component)
  const { props, entryName, bust } = opts
  const loadEntry = entryName ? `<script src="/${entryName}.js?${bust}"></script>` : ''
  return `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="app">${content}</div>
    <script>APP_PROPS = ${JSON.stringify(props)}</script>
    ${loadEntry}
  </body>
</html>
`
}
