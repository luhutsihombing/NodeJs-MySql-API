const express = require("express");
const app = express();
const cors = require("cors");
const port = 3300;
const programmingLanguagesRouter = require("./routes/programmingLanguages");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.get("/testing", (req, res) => {
  res.json({ message: "only Testing" });
});
app.use("/programming-languages", programmingLanguagesRouter);
require("./app/routes/auth.routes")(app);
require("./app/routes/authenticated.routes")(app);
require("./app/routes/crud.routes")(app);
require("./app/routes/file.routes")(app);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});