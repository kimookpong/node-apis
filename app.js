require("dotenv").config({ path: ".env" });

const express = require("express");
const Route = require("./middleware/routeMiddleware");

// Middleware
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  Route.sendResponse(res, 200, "Welcome to the server");
});

// Modules support
const moduleSupport = ["abc", "demo", "demo2", "modx"];
moduleSupport.forEach((mod) => {
  app.use(`/${mod}`, require(`./modules/${mod}/routes`));
});

// Error handling middleware
app.use(Route.notFound);
app.use(Route.errorHandle);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
