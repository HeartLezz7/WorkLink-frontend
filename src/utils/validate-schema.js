export default function validateSchema(schema, input) {
  const { error } = schema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, item) => {
      const { message, path } = item;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
}
