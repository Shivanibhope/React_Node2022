const validator = require("validator")


const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
   first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
   phone:{
        type: String,
        max: 10,
        min: 10
    },
    address: {
        type: String,
        require: true
     },
    gender: {
        type: String,
        require: true
     },
    password: {
        type: String,
        require: true
     },
   confirm_password: {
        type: String,
        require: true
 }
});


const listModel = mongoose.model("ListUser", UserSchema);
module.exports = listModel