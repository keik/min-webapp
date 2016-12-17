const test = require('tape')
const axios = require('axios')
const Express = require('express')
const promiseFinally = require('promise.prototype.finally')

const api = require('./api').default

promiseFinally.shim()

let app
let PORT
test.test('setup', (t) => {
  app = new Express()
    .use(api)
    .listen(0)
  PORT = app.address().port
  t.end()
})

test('GET /users with no parameter should return all users', (t) => {
  axios.get(`http://localhost:${PORT}/users`)
    .then((res) => {
      t.deepEqual(res.data,
        { '1': { name: 'alice' },
          '2': { name: 'bob' },
          '3': { name: 'carol' } }
      )
    }).catch((err) => {
      console.error(err)
      t.fail(err)
    }).finally(t.end)
})

test.test('teardown', (t) => {
  app.close()
  t.end()
})
