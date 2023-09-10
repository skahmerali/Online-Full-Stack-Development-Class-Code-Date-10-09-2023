const UserModel = require('../Models/UserModel');


const Register = (req, res) => {
    const {f_name, email, password, mobile} = req.body;

    const user = UserModel({
        f_name,
        email,
        password,
        mobile
    })

    user.save();

    res.send({ message:"Registration SuccessFull!" })

}

module.exports = {
    Register
}