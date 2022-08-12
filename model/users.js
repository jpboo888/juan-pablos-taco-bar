let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username:{type:String,required:true,min:5,max:50},
    UserLogin:{
        email: {type:String,required:true, unique:true},
        password:{type:String,required:true,min:5,max:200}
    }
});

let user = mongoose.model('user', userSchema);
module.exports = User;