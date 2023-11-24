const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API MID40",
      version: "1.0.0",
      description: "Documentação da API",
    },
    tags: [
      {
        name: "Tags",
        description: "Operações relacionadas ao leitor RFID MID40",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
