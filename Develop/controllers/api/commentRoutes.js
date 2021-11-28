const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
    Comment.create({
        ...req.body,
        userID: req.session.userID
    })
    .then(newComment =>{
        res.json(newComment)
    })
  });

  module.exports = router;
  