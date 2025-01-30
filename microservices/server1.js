require("dotenv").config({ path: "../.env" });

const express = require("express");
const CorsMiddleware = require("../middleware/corsMiddleware");
const Route = require("../middleware/routeMiddleware");

// Middleware
const app = express();
app.use((req, res, next) => {
  CorsMiddleware.handle(req, res, ["http://localhost"]);
  next();
});
app.use(express.json());
app.get("/", (req, res) => {
  Route.sendResponse(res, 200, "Welcome to the server");
});

// Modules support
const moduleSupport = ["abc"];
moduleSupport.forEach((module) => {
  app.use(`/${module}`, require(`../modules/${module}/routes`));
});

// Error handling middleware
app.use(Route.notFound);
app.use(Route.errorHandle);

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
