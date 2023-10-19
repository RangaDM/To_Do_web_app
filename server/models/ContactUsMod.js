const mongoose = require('mongoose');

const conSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ContactUs', conSchema);