const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../Utils/auth");

router.post("/", withAuth, (req, res) => {
    const body = req.body
    Post.create({
        ...body,
        user_id: req.session.userID
    })
    .then(
        newPost => {
            res.json(newPost)
        }
    ).catch((err)=>{
        console.log(err)
    })
  });


router.put("/:id", withAuth, (req, res) => {
   
    Post.update(req.body,{
            where:{id: req.params.id}
    })
    .then(
        affectedRows => {
            if(affectedRows>0){
                res.status(200).end()
            }else{
                res.status(404).end()
            }
        }
    )
  });

  router.delete("/:id", withAuth, (req, res) => {
    
    Post.destroy({
            where:{id: req.params.id}
    })
    .then(
        affectedRows => {
            if(affectedRows>0){
                res.status(200).end()
            }else{
                res.status(404).end()
            }
        }
    )
  });

  module.exports = router;