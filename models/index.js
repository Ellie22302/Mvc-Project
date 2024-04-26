const User = require('./user');
const BlogPost = require('./blogPost');

BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})



module.exports = { User, BlogPost };