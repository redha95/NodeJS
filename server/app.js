const db = require("./lib/db");
const User = require("./models/user");
const express = require("express");
const MovieRouter = require("./routes/movie");
const UserRouter = require("./routes/user");
const SecurityRouter = require("./routes/security");
const bodyparser = require("body-parser");
const verifyToken = require('./middlewares/security');

const app = express();
app.use(bodyparser.json());

app.use('/',SecurityRouter);
app.use(verifyToken);
app.use('/user',UserRouter);
app.use('/movies',MovieRouter);

app.listen(3000, () => console.log("Listening"));

// db.once('open', () => 
// {
//     let user = new User({
//         email:"lol@hotmail.fr",
//         password:"salut"
//         });

//     // user.register().then(data => console.log(data)).catch(error => console.log(erreur));
//          User.login(user.email,user.password).then(user => console.log(user)).catch(error => console.log(error));
    

// });

// db.on('error', (error) => console.log(error));

