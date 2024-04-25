import mongoose from "mongoose"
const Schema: any = mongoose.Schema

const driverSchema = new Schema({
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    verified: {
        type: Number,
        required: true
    },
    kyc: {
        type: String,
        required: true
    },
}, { timestamps: true })


const Driver: any = mongoose.model('Driver', driverSchema);

export default Driver