import express from 'express'

import * as ssrUtils from './ssr-utils'
import App1View from '../share/app1'
import App2View from '../share/app2'

const router = express.Router()

router
  .get('/app1', (req, res) => {
    const props = {name: 'Alice'}
    const fullHTML = ssrUtils.renderFullPage(App1View, props, 'app1')
    res.end(fullHTML)
  })
  .get('/app2', (req, res) => {
    const props = {name: 'Alice'}
    const fullHTML = ssrUtils.renderFullPage(App2View, props, 'app2')
    res.end(fullHTML)
  })

export default router
