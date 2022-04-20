export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next()
  }
  catch (err) {
    res.status(400).send(err)
  }
}
