const express = require('express')

const router = require('./router')

const app = express()

app.use(express.static('./build/assets'))
app.use(router)

app.listen(3000, () => {
  console.log('start on port 3000')
})
