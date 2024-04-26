const router = require("express").Router();
const { BlogPost } = require("../models");
const { withGuard } = require("../utils/authGuard");
router.get("/", withGuard, async (req, res) => {
  try {
    const BlogPostData = await BlogPost.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const blogPosts = BlogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );
    console.log(blogPosts);

    res.render("dashboard", {
      blogPosts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", withGuard, (req, res) => {
  res.render("newBlogPost", {
    loggedIn: req.session.logged_in,
  });
});

module.exports = router;