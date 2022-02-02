import Joi from "joi";

const CarValidator = Joi.object({
    model:Joi.string().regex(new RegExp('^[a-zA-ZА-Яа-яіІїЇґҐ]{1,20}$')).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required(),
    price:Joi.number().min(0).max(1000000).required()
})

export default CarValidator;