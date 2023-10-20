const express = require("express");
const app = express();

const blog = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/blog", (req, res) => {
  res.render("bloghome", {
    blog: blog,
  });
});

router.get("/blog/:slug", (req, res) => {
  blogPost = blog.filter((post) => {
    return post.slug == req.params.slug;
  });
  res.render("blogs", {
    title: blogPost[0].title,
    content: blogPost[0].content,
  });
});

module.exports = router;