import Express from 'express'
import React from 'react'

import api from './api'
import { renderFullPage } from './renderer'
import { isDev } from '~/lib/share/utils'

import App from '~/lib/share/components/app'

const app = Express()
app.use(api)

// add static directories
app.use(Express.static('build'))

// apply SSR middleware
app.use(function(req, res, next) {
  if (req.url === '/favicon.ico')
    return next()

  res.send(renderFullPage(<App />, {
    entryName: 'main',
    bust: isDev ? '' : Number(new Date())
  }))
})

export default app
