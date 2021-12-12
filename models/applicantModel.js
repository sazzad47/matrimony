const mongoose = require('mongoose')

const applicantSchema = new mongoose.Schema({
    
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
    district: {
        type: String,
        required: true
    },
    totalPrice: {
        type: String,
        required: true
    },
    biodataNumber: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    trxID: {
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

module.exports = mongoose.model('applicant', applicantSchema)