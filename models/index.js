const User = require('./User');
const Order = require('./Order');

//create associations
User.hasMany(Order, {
    foreignKey: 'user_id'
});

<<<<<<< HEAD
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Order, {
    foreignKey: 'post_id'
});
=======
//Post.belongsTo(User, {
    //foreignKey: 'user_id',
//});

//Comment.belongsTo(User, {
    //foreignKey: 'user_id'
  //});
  
//Comment.belongsTo(Order, {
    //foreignKey: 'post_id'
//});
>>>>>>> f24f977548828a14274e02e6d4ea7b968f772ca2
  

module.exports = {User, Order,};