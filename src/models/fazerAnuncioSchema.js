import Joi from 'joi';

export const novoAnuncioSchema = Joi.object ({
    value: Joi.number().positive().required(),
    description: Joi.string().min(5).max(50).required(),
    image: Joi.string().uri().min(10).required()
})