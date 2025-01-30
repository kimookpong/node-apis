require("dotenv").config({ path: "../.env" });

const express = require("express");
const CorsMiddleware = require("../middleware/corsMiddleware");

// Middleware
const app = express();
app.use((req, res, next) => {
  CorsMiddleware.handle(req, res, ["http://localhost"]);
  next();
});
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

// Modules support
const moduleSupport = ["abc"];
moduleSupport.forEach((module) => {
  app.use(`/${module}`, require(`../modules/${module}/routes`));
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({
    code: 404,
    message: "The requested route was not found on the server.",
    path: process.env.NODE_ENV === "development" ? req.originalUrl : undefined,
  });
});
const errorHandler = require("../middleware/error-handler");
app.use(errorHandler);

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
