import Joi from "joi";

const idValidator=Joi.object({
    id:Joi.number().min(1).required()
});

export default idValidator