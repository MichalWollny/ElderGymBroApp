export const errorHandler = (error, req, res) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Server Error";
  res.status(statusCode).json({ message: message });
};
