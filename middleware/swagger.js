require("dotenv").config();
const swaggerJSDoc = require("swagger-jsdoc");

const SwaggerDoc = ({
  module = "abc",
  title = "API documentation",
  version = "1.0.0",
  description = "",
}) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";
    let servers = [{
      url: `${baseUrl}${module}`,
      description: `${module.toUpperCase()} API`,
    }];

  let options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: title,
        version: version,
        description: description,
      },
       servers: servers,
    },
    apis: [`./modules/${module}/routes.js`],
  };
  return swaggerJSDoc(options);
};

module.exports = SwaggerDoc;
