const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

Post.hasMany(Comment, {
  foreignKey: 'Post_ID',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userID',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
  });


module.exports = { User, Comment, Post };