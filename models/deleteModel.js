const mongoose = require('mongoose')

const deleteSchema = new mongoose.Schema({
    
    fullname: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    biodataNumber: {
        type: String,
        required: true
    },
    
    done: {
        type: String,
        default:'no'
    },
    
}, {
    timestamps: true
})

module.exports = mongoose.model('deleteRequest', deleteSchema)