const hook = require('css-modules-require-hook');
hook({
  generateScopedName: '[name]_[local]__[hash:base64:5]'
})

const express = require('express')

const router = require('./router')

const app = express()

app.use(express.static('./build/assets'))
app.use(router)

app.listen(3000, () => {
  console.log('start on port 3000')
})
