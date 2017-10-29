var express = require('express');
var Category = require('../model/category');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/categories', function(req, res, next) {
  var searchQuery = {};

  if(req.query.name) {
    searchQuery = { name: req.query.name };
  }

  Category.find(searchQuery, function(err, users){
    if (err) {
      res.status(400);      
      res.send();
    }

    console.log("returning all the users.");
    res.send(users);
  })
});

router.post('/categories', function(req, res, next) {
  if(isArray(req.body)) {
    req.body.forEach(saveCategory);
  } else {
    saveCategory(req.body);
  }

  res.send({ status : 'OK' });

  function saveCategory(categoryData) {
    var newCategory = new Category(categoryData);
    
    newCategory._id = mongoose.Types.ObjectId();

    newCategory.save(function(err) {
      if (err) {
        console.log("not saved!");
        res.status(400);
        res.send();
      }
  
      console.log("saved!");
    });
  }
});

router.put('/categories', function(req, res, next) {
  console.log(req);
  if(isArray(req.body)) {
    req.body.forEach(updateCategory);
  } else {
    updateCategory(req.body);
  }

  res.send({status: 'ok'});

  function updateCategory(categoryData) {
    var category = new Category(categoryData);
    
    Category.update({_id : category._id}, category, function(err) {
      if (err) {
        console.log("not updated!");
        res.status(400);      
        res.send();
      }
  
      console.log("updated!");
    });
  }
});

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

module.exports = router;
