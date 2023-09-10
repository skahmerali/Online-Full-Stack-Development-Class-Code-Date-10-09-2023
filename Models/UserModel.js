const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    f_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
});

const UserModel = new mongoose.model('User', UserSchema);


module.exports = UserModel;