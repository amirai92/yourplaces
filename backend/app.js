const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const usersRouters = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json);

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRouters);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});
mongoose
  .connect(
    "mongodb+srv://amir:A3HMFUQ3Sj8nSVaT@cluster0.tuzom.mongodb.net/places?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });