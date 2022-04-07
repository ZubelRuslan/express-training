const validator = (schema) => async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
  }
  catch (err) {
    res.status(400).send(err)
  }
}

module.exports = validator

