const User = require('./User');
const Order = require('./Order');

//create associations
User.hasMany(Order, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Order, {
    foreignKey: 'post_id'
});
  

module.exports = {User, Order,};