const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/mongoDBConfig");
const colors = require("./helpers/colors");
const AppError = require("./helpers/appError");
const errorHandler = require("./middlewares/errorHandler");
const routes = require("./routes");

const app = express();

app.use(cors());

// Request Body Parser Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

//Image Uploads
app.use("/public", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.NODE_PORT || 6060;

// api routes
app.use("/api", routes);

app.all("/api/*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on the server`, 404));
});

const env = process.env.NODE_ENV;
const appRoot = fs.realpathSync(process.cwd());

const clientPath = path.resolve(appRoot, "../client/build");
const indexPath = path.join(clientPath, "index.html");

app.use(express.static(clientPath));
app.get("/*", (req, res) => {
  res.sendFile(indexPath);
});

app.use(errorHandler);

const server = app.listen(PORT, function () {
  console.log("server running on port ", PORT);
});
