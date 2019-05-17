const express = require("express");
const createToken = require('../lib/auth').createToken;
const User = require("../models/user");


const router = express.Router();

    router.post('/register', (req,res) => {
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

  router.post('/login', (req,res) => {
    if(req.body.username === "user" && req.body.password === "password"){
        const token = createToken({
            firstName: "user"
        });

       // User.login(user.email,user.password).then(user => console.log(user)).catch(error => console.log(error));

        res.status(201).send({token});

    } else {
        res.status(400).send("Invalide mdp ou username");
    }
});

module.exports = router;