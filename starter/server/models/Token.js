const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    refreshToken: {type: String, required: true},
    ip:{type: String, required: true},
    userAgent: {type: String, required: true},
    isValid: {type: Boolean, required: true},

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
      },
}, {timestamp:true})

module.exports = mongoose.model('Token',TokenSchema)