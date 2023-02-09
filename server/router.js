const express = require('express');
const router = express.Router();
const db  = require('./dbConnection');
const { signupValidation, loginValidation } = require('./validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getAllProducts } = require('./controllers/productController');
 
 
router.get('/products', getAllProducts)


router.post('/save', function(req, res, next){    
    
    var user = {
    Name: req.body.name,
    Code: req.body.code,
    Family : req.body.family,
    Price : req.body.price,
    Quantity : req.body.qte
    
    }
    db.query('INSERT INTO user SET ?', user, function(err, result) {
    //if(err) throw err
    if (err) {
        return res.status(401).send({
            msg: err
          });
    } else {                
        return res.status(401).send({
            msg: 'Product successfuly Done !',
            user: user
          });
    }
    })
  
    })
 
module.exports = router;