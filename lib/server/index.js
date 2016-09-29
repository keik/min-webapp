import express from 'express'

import router from './router'

const app = express()

app.use(express.static('./build/assets'))
app.use(router)

app.listen(3000, () => {
  console.log('start on port 3000')
})
