const express = require("express");
const app = express();

const blog = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;