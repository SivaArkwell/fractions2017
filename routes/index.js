//routes and controllers are the same thing

var express = require('express');
var router = express.Router();

/* GET home page. */
// router is express library for handling urls
router.get('/', function(req, res, next) {
  res.render('pathway', {
    myName: "Pathway",
    title: "Home"
  });
});


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// main pages
router.get('/pathway', function(req, res, next) {
  res.render('pathway', {
    myName: "Pathway",
    title: "Pathway"
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    myName: "Contact",
    title: "Contact"
  });
});

router.get('/thank_you', function(req, res, next) {
  res.render('thank_you', {
    myName: "Thank You",
    title: "Thank You"
  });
});

router.get('/error_message', function(req, res, next) {
  res.render('error_message', {
    myName: "Error Message",
    title: "Error Message"
  });
});

router.get('/planningSupports', function(req, res, next) {
  res.render('planningSupports', {
    myName: "Planning Supports",
    title: "Planning Supports"
  });
});

router.get('/plfSupports', function(req, res, next) {
  res.render('plfSupports', {
    myName: "PLF Supports",
    title: "PLF Supports"
  });
});

router.get('/research', function(req, res, next) {
  res.render('research', {
    myName: "Research",
    title: "Research"
  });
});

router.get('/tasks', function(req, res, next) {
  res.render('tasks', {
    myName: "Tasks",
    title: "Tasks"
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    myName: "Contact",
    title: "Contact"
  });
});

module.exports = router;
