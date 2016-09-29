import express from 'express'

import * as ssrUtils from './ssr-utils'
import AppView from '../share/app'

const router = express.Router()

router
  .get('/', (req, res) => {
    const props = {name: 'Alice'}
    const fullHTML = ssrUtils.renderFullPage(AppView, props, 'app')
    res.end(fullHTML)
  })

export default router
