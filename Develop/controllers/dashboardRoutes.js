const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: { user_id: req.session.userID },
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("all-posts-admin", { 
        // layout: "dashboard", 
        loggedIn: req.session.loggedIn,
        posts });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("login");
    });
});

router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/", withAuth, (req, res) => {
  Post.findByPk(req.params.id)
    .then((dbPostData) => {
        if(dbPostData){
            const post = post.get({ plain: true });
            res.render("edit-post", {  post,
              loggedIn: req.session.loggedIn });
        }else{
            res.status(404).end()
        }
      
    }) 
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findByPk(req.params.id)
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render("edit-post", {
          
          post, loggedIn: req.session.loggedIn
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router