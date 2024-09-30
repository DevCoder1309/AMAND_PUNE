const mongoose = require('mongoose')

const UserOtpVerificationSchema = new mongoose.Schema({
    otp: String,
    createdAt: Date,
    expiresAt: Date,
})

const UserOtpVerification = mongoose.model('UserOtpVerification', UserOtpVerificationSchema)

module.exports = UserOtpVerification