import Driver from '../models/drivers'

async function onlyPhoneExist (phone: string){
    let driver = await Driver.findOne({ phone: phone  })
    if(driver === null){
        return false
    }else{
        return true
    }
}


export default onlyPhoneExist
