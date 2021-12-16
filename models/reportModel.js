const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    
    fullname: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    report: {
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

module.exports = mongoose.model('report', reportSchema)