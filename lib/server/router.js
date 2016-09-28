const express = require('express')

const ssrUtils = require('./ssr-utils')
const AppView = require('../share/app')

const router = express.Router()

router
  .get('/', (req, res) => {
    const props = {name: 'Alice'}
    const fullHTML = ssrUtils.renderFullPage(AppView, props, 'app')
    res.end(fullHTML)
  })

module.exports = router
