const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    userName: {
      type: "string",
      pattern: "^[A-Za-z][a-zA-Z0-9]*$",
    },
    email: {
      type: "string",
      pattern: "^[^s@]+@[^s@]+.[^s@]+$",
    },
    password: {
      type: "string",
      minLength: 5,
    },
  },
  required: ["userName", "email", "password"],
};

module.exports = ajv.compile(schema);
