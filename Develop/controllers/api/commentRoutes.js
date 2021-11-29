const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../Utils/auth");

router.post("/", withAuth, (req, res) => {
    Comment.create({
        ...req.body,
        user_id: req.session.userID
    })
    .then(newComment =>{
        res.json(newComment)
    })
  });

  module.exports = router;
  