import mongoose from "mongoose"
const Schema: any = mongoose.Schema

const kycSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    vmodel: {
        type: String,
        required: true
    },
    license: {
        type: String,
        required: true
    },
    vcolor: {
        type: String,
        required: true
    },
    jtb: {
        type: String,
        required: true
    },
    pdlicense: {
        type: String,
        required: true
    },
    excar: {
        type: String,
        required: true
    },
    intcar: {
        type: String,
        required: true
    },
    pvlicense: {
        type: String,
        required: true
    },
    proad: {
        type: String,
        required: true
    },
    govtid: {
        type: String,
        required: true
    },
    hackey: {
        type: String,
        required: true
    },
    pcarown: {
        type: String,
        required: true
    },
    vinscert: {
        type: String,
        required: true
    },
    nin: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
}, { timestamps: true })


const Kyc: any = mongoose.model('Kyc', kycSchema);

export default Kyc