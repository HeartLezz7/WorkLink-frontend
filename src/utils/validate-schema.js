export default function validateSchema(schema, input) {
  const validate = schema.validate(input, { abortEarly: false });
  if (validate.error) {
    const result = validate.error.details.reduce((acc, item) => {
      const { message, path } = item;
      acc[path[0]] = message;
      return acc;
    }, {});
    const error = { error: result };
    return error;
  } else {
    return validate;
  }
}
