const express = require("express");
const User = require("../models/user");
const mongo = require('mongodb');


const router = express.Router();

router.get('/', (req,res) => {
    User.find(req.query).then(data => res.json(data));
});


router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;

    User.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
    });
  
    res.json({ success: id })
  });

  router.get('/show/:id', (req, res) => {
    var id = req.params.id;

    User.findOne({ _id: new mongo.ObjectId(id) }).then(user => {
        res.json(user);
    })     
  });

  router.patch('/edit/:id', (req, res) => {
    var id = req.params.id;

    User.findOne({ _id: new mongo.ObjectId(id) }).then(user => {

        user.update(req.body, function(err, result) {
            if (err) {
                console.log('Error updating user: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(user);
            }
        });
    
  });
  });


module.exports = router;