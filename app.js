const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());

// Dynamically load routes from modules
const modulesPath = path.join(__dirname, "modules");
fs.readdirSync(modulesPath).forEach((module) => {
  const moduleRoutes = require(`./modules/${module}/routes`);
  app.use(`/api/${module}`, moduleRoutes);
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({
    code: 404,
    message: "The requested route was not found on the server.",
    path: process.env.NODE_ENV === "development" ? req.originalUrl: undefined,
  });
});
const errorHandler = require("./middleware/error-handler");
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
