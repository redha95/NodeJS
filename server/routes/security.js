const express = require("express");
const createToken = require('../lib/auth').createToken;


const router = express.Router();

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