const test = require('tape')

const app = require('./app').default

test('app should exports express instance', (t) => {
  t.is(app.name, 'app')
  t.end()
})
