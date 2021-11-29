const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", (req, res) => {
    
    User.create({
       username: req.body.username,
       password: req.body.password
    })
    .then(
        userData => {
            req.session.save(()=>{
              req.session.userID = userData.id
              req.session.username = userData.username
              req.session.loggedIn = true
              res.json(userData)
            })
        }
    )
  });

  router.post("/login", (req, res) => {
    
    User.findOne({
       where:{
           username: req.body.username
       }
    })
    .then(
        userData => {
            if(!userData){
                res.status(400).json({
                    message:'No user found'
                })
                return;
            } 
            const validPassword = userData.checkPassword(req.body.password)
            if(!validPassword){
                res.status(400).json({
                    message:'Incorrect Password'
                })
                return;
            }
            req.session.save(()=>{
              req.session.userID = userData.id
              req.session.username = userData.username
              req.session.loggedIn = true
              res.json({user:userData, message: 'You are now logged in'})
            })
        }
    )
  });

  router.post("/logout", (req, res) => {
    console.log(req.session);
    if(req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(204).end()
        })
    }else{
        res.status(404).end()
    }
  });

  router.delete("/user/:id", (req, res) => {
   
    User.destroy({
            where:{id: req.params.id}
    })
    .then(
        userData => {
            if(!userData){
                res.status(404).json({message: 'No user found'})
                return
            }
            res.json(userData)
        }
    )
  });

  module.exports = router;
  