const Router = require('express').Router
const usersController = require('./users.controller')
const auth = require("../middlewares/auth.middleware");

const router = new Router();

router
  .get('/:id', auth, usersController.getById)
  .get('/', usersController.getAll)
  .post('/', (req, res) => {
    res.status(201).send('Created')
  })
router.put('/:id', (req, res) => {
  res.send('Updated ' + req.params.id)
})
router.delete('/:id', (req, res) => {
  res.send('Deleted ' + req.params.id)
})

module.exports = router