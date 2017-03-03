import Express from 'express'

import CONFIG from '../../config'

const app = Express()

app.use(Express.static('./static'))
app.use(Express.static('./bundle'))

app.listen(CONFIG.PORT, () => {
  console.log(`Server start on port ${CONFIG.PORT}`)
})
