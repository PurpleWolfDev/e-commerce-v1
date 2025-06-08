const mongoose = require("mongoose");
var signUp = (req, res, dataModal) => {
    const signUpStruc = new mongoose.Schema({
        name : String,
        phone: String,
        adress : String,
        password : String,
        rePassword : String
    });
    var phone = dataModal.phone;
    signup.find({phone : phone}, (err, user) => {
        if(user.length>0) {
            console.log("tell me");
        }
    })
    console.log(phone);
    var data = new signup(dataModal);
    data.save();
    res.redirect("https://127.0.0.1/login");
}
module.exports = signUp;