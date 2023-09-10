const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://syedanas:anas@cluster0.gvjk4rz.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('connected', () => {
    console.log('Mongoose Connected SuccessFully');
})