import Express from 'express'

const app = Express()

app.use(Express.static('./static'))
app.use(Express.static('./bundle'))

app.listen(3000, () => {
  console.log('Server start on port 3000')
})
