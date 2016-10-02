import express from 'express'

import router from './router'

const app = express()

app.use(express.static('./public'))
app.use(express.static('./bundle'))

app.use(router)

app.listen(3000, () => {
  console.log('start on port 3000')
})
