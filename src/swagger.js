const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "event-api-deepthought",
      version: "1.0.0",
      description: "API documentation for event-api-deepthought",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v3/app/events",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to your route files
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = {swaggerSpec}