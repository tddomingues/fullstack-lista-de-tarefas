const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    return next();
  } catch (error) {
    return res.status(400).json({
      error: error.errors[0],
    });
  }
};

module.exports = validate;
