import Joi from "joi";
const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: ["com"] })
    .pattern(/@(gmail|hotmail)\.com$/)
    .trim()
    .required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .trim()
    .required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
});

export { registerSchema };
