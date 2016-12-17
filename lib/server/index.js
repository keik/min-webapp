var express = require('express')

if (module.hot) {
  module.hot.accept('./app', function() {
    console.log('🔁  HMR Reloading `./app`...')
  })
  console.info('✅  Server-side HMR Enabled!')
} else {
  console.info('❌  Server-side HMR Not Supported.')
}

express()
  .use((req, res) => require('./app').default.handle(req, res))
  .listen(3000, function(err) {
    if (err) {
      console.error(err)
      return
    }
    console.log('Listening at http://localhost:3000')
  })
