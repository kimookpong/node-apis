require("dotenv").config();
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

class SwaggerDoc {
  constructor({module = "abc"}) {
    this.swaggerOptions = {
      definition: {
         openapi: "3.0.0",
        info: {
          title: "Abc API documentation",
          version: "1.0.0",
        },
        servers: [
          {
            url: process.env.BASE_URL + module,

          },
        ],
      },
      apis: [path.join(__dirname, `../modules/${module}/routes.js`)],
    };
  }

  getSwaggerSpec() {
    return swaggerJSDoc(this.swaggerOptions);
  }
}


module.exports = SwaggerDoc;