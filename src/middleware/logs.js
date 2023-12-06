const logRequest = (req, res, next) => {
  console.log("Terjadi reques ke PATH: ", req.path);

  next();
};
module.exports = logRequest;
