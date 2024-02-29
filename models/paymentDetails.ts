import mongoose from "mongoose"
const Schema: any = mongoose.Schema

const paySchema = new Schema({
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
        type: String,
        required: true
    },
    kyc: {
        type: String,
        required: true
    },
}, { timestamps: true })


const Pay: any = mongoose.model('Pay', paySchema);

export default Pay