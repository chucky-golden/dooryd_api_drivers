import mongoose from "mongoose"
const Schema: any = mongoose.Schema

const paySchema = new Schema({
    id: {
        type: String,
        required: true
    },
    billing: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    regcode: {
        type: String,
        required: true
    },
    vat: {
        type: String,
        required: true
    },
    vatnum: {
        type: String,
        required: true
    },
    actname: {
        type: String,
        required: true
    },
    actnum: {
        type: String,
        required: true
    },
    swift: {
        type: String,
        required: true
    },
    nok: {
        type: String,
        required: true
    },
    nokphone: {
        type: String,
        required: true
    },
}, { timestamps: true })


const Pay: any = mongoose.model('Pay', paySchema);

export default Pay