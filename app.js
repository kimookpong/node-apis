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
const errorHandler = require("./middleware/error-handler");
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
