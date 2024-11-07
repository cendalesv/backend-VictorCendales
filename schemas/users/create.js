import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        "string.base":"Tiene que ser alfanumerico",
        "string.alphanum":"No caracteres especiales"
    }),
    email: joi.string().required(),
    password:joi.string().required(),
    photo: joi.string().required(),
    role: joi.number().required(),
    auto: joi.objectId().required()
})

export default schema