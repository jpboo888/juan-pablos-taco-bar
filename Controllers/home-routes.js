const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('homepage');
});

// Route to display static src images
app.get("/static", (req, res) => {
  res.render("static");
});

// Route to display dynamic src images
app.get("/dynamic", (req, res) => {
  imageList = [];
  imageList.push({ src: "T1.jpeg", name: "Taco Combo 1" });
  imageList.push({ src: "T2.jpeg", name: "Taco Combo 2" });
  imageList.push({ src: "T3.jpeg", name: "Taco Combo 3" });
  imageList.push({ src: "T4.jpeg", name: "Taco Combo 4" });
  imageList.push({ src: "TBTB logo.jpeg", name: "TBTB Logo" });
  res.render("dynamic", { imageList: imageList });
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

     
module.exports = router;