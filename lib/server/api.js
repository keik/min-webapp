import { Router } from 'express'

const users = {
  1: {name: 'alice'},
  2: {name: 'bob'},
  3: {name: 'carol'},
}

export default new Router()
  .get('/users', (req, res) => {
    res.json(users)
  })
