const express = require("express");
const app = express();
const path = require("path");

const create = require("express-handlebars");
const hbs = create.create({
  /* config */
});

// Register `hbs.engine` with the Express app.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(__dirname, "images", imageName));
});

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(3000, () => {
  console.log(`Server is listening to http://localhost:3000`);
});
