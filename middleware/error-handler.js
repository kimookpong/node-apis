// Error handling middleware for Express
module.exports = (err, req, res, next) => {
  // Log the error details (use a proper logger in production)
  console.error(`[Error] ${err.message}`);
  console.error(err.stack);

  // Set the HTTP status code
  const statusCode = err.status || 500;

  // Send the error response
  res.status(statusCode).json({
    code: statusCode,
    message: err.message || "Internal Server Error",
    details: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
