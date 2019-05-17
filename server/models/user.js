const db = require("../lib/db");
const mongoose = require("mongoose"),SALT_WORK_FACTOR = 10;;
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    dob:Date,
    termsAccepted:Boolean,
    termsAcceptedDate: Date
});





UserSchema.pre('save', function(next){ 
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
    
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
    
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
    
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

UserSchema.methods.register = function(){
    return this.save();
};

UserSchema.statics.login = function(email, password){
    return new Promise((resolve,reject)=> {
        User.findOne({ email }).then(user => {
            if(!user) return reject ('User not found');
            bcrypt.compare(password, user.password).then(res => res ? resolve(user) : reject('Wrong password'));
        })           
    })
   
};

const User = db.model("User",UserSchema);

module.exports = db.model('User', UserSchema);

















/**
 * // let user = new User({
//     firstname:"Jacque",
//     lastname:"Dubois",
//     email:"jakouille@hotmail.fr",
//     password:"jacks",
//     // passord,
//     dob:new Date(),
//     termsAccepted: true,
//     termsAcceptedDate: new Date()
//     });
//     user.save().then(data => console.log(data)).catch(error => console.log("erreur"));


// let movie = new Movie({
//     title:"Avengers",createdAt: new Date(),year:2019,category:"Action"
// });
// movie.save().then(data => console.log(data)).catch(error => console.log("erreur"));


// movie = new Movie({
//     title:" Helene",createdAt: new Date(),year:1954,category:"Drama"
// });
// movie.save().then(data => console.log(data)).catch(error => console.log(error));
 */