const express = require("express");
const app = express();

const apiName = "api";
const moduleSupport = ["abc", "demo", "modx"];

// Middleware
app.use(express.json());

moduleSupport.forEach((mod) => {
  app.use(`/${mod}`, require(`./modules/${mod}/routes`));
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({
    code: 404,
    message: "The requested route was not found on the server.",
    path: process.env.NODE_ENV === "development" ? req.originalUrl : undefined,
  });
});
const errorHandler = require("./middleware/error-handler");
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
