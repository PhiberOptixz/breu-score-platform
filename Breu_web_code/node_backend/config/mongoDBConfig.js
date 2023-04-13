const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("./../helpers/colors");

const env = process.env.NODE_ENV;

// Mongo DB connection
mongoose
  .connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(colors.green, `MongoDB connected to ${env} database`))
  .catch((err) =>
    console.error(colors.red, `Error connecting to ${env} Database`, err)
  );
