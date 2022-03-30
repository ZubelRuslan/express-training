const auth = (req, res, next) => {
  const token = req.headers.get('authorization').split(' ')[1]
  let payload = jwt.verify(token, 'secret')
  payload = {
    id: '123456'
  }
  const user = DB.findById(payload.id);
  if (!user || user.isBanned) {
    res.status(403).send('')
    return
  }
  next()
}

module.exports = auth