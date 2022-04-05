const Joi = require('joi');

const requiredSchema = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.number().required(),
});

const lengthSchema = Joi.object({
  name: Joi.string().min(5),
  quantity: Joi.number().min(1),
});

const fieldsValidation = (fields) => {
  const { error: errorRequired } = requiredSchema.validate(fields);
  const { error: errorLength } = lengthSchema.validate(fields);
  if (errorRequired) return { code: 400, body: { message: errorRequired.message } };
  if (errorLength) return { code: 422, body: { message: errorLength.message } };
  return false;
};

const productValidation = (req, res, next) => {
  const { name, quantity } = req.body;
  const validation = fieldsValidation({ name, quantity });
  if (validation !== false) {
    return res.status(validation.code).json(validation.body);
  }
  next();
};

module.exports = productValidation;