import Express from 'express'

import api from './api'

const app = Express()
app.use(api)

export default app
