const express = require("express");
const app = express();
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
  res.json({ message: "Testing" });
});
app.use("/programming-languages", programmingLanguagesRouter);
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