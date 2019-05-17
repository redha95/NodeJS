const express = require("express");
const User = require("../models/user");
const mongo = require('mongodb');


const router = express.Router();

router.get('/', (req,res) => {
    User.find(req.query).then(data => res.json(data));
});

router.post('/create', (req,res) => {
    const user = new User(req.body);

    user.save().then(data => res.status(201).send(data))
    .catch(error => {
        if(error.name === "ValidationError"){
            res.status(400).json(error.errors);
        } else {
            res.sendStatus(500);
        }
    })
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