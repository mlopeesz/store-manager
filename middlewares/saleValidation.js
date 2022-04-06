const Joi = require('joi');

const requiredSchema = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().required(),
});

const valueSchema = Joi.object({
  quantity: Joi.number().min(1),
});

const fieldsValidation = (fields) => {
  const { error: errorRequired } = requiredSchema.validate(fields);
  const { error: errorValue } = valueSchema.validate(fields);
  if (errorRequired) return { code: 400, body: { message: errorRequired.message } };
  if (errorValue) return { code: 422, body: { message: errorValue.message } };
};

const saleValidation = (req, res, next) => {
  const [{ productId, quantity }] = req.body;
  const validation = fieldsValidation({ productId, quantity });
  if (validation !== false) return res.status(validation.code).json(validation.body);
  next();
};

module.exports = saleValidation;