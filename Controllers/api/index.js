const router = require('express').Router();

const userRoutes = require('./user-routes');
//const postRoutes = require('./order-routes');


router.use('/user', userRoutes);
//router.use('/orders', orderRoutes);

module.exports = router;