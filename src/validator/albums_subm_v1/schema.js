const Joi = require('joi');

const Album_subm_v1_PayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required()
});
module.exports = { Album_subm_v1_PayloadSchema };
