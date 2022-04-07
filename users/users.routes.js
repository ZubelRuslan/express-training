const Router = require('express').Router
const usersController = require('./users.controller')
const auth = require("../middlewares/auth.middleware");
const validator = require('../middlewares/validation.middleware')
const schema = require("./validationSchemas/createUser.schema");
const upload = require("../middlewares/uploadAvatars.middleware");

const router = new Router();

router
  .get('/:id', auth, usersController.getById)
  .get('/', usersController.getAll)
  .put('/:id/updateAvatar', upload.single('avatar'), (req, res, next) => {
    req.file
    user.avatar = 'static/photos/someID/somePhotoFilename.jpg'
  })
  .post('/', validator(schema), (req, res) => {
    res.status(201).send('Created')
  })
router.put('/:id', (req, res) => {
  res.send('Updated ' + req.params.id)
})
router.delete('/:id', (req, res) => {
  res.send('Deleted ' + req.params.id)
})

module.exports = router