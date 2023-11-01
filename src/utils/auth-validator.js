import Joi from "joi";
const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: ["com"] } })
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

const loginSchema = Joi.object({
  emailOrPhoneNumber: Joi.alternatives([
    Joi.string()
      .trim()
      .email({ tlds: { allow: ["com"] } })
      .pattern(/@(gmail|hotmail)\.com$/),
    Joi.string()
      .trim()
      .pattern(/^[0-9]{10}$/),
  ]),
  password: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9]{6,30}$/),
});
export { registerSchema, loginSchema };
