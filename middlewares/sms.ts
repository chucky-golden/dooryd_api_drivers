import twilio from 'twilio'
require('dotenv').config()

const ACCOUNT_SID: any = process.env.ACCOUNT_SID
const ACCOUNT_AUTH: any = process.env.ACCOUNT_AUTH
const ACCOUNT_PHONE: any = process.env.ACCOUNT_PHONE

const client: any = twilio(ACCOUNT_SID, ACCOUNT_AUTH)

async function sendSms(body: string, to: string) {
    try{
        let sent:any = await client.messages.create({
            body, from: ACCOUNT_PHONE, to
        })

        if(sent !== null){
            return true
        }else{
            return false
        }
    }catch(error){
        console.log(error)
    }
}

export default sendSms