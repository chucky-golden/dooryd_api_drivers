import bcrypt from 'bcrypt'
require('dotenv').config()
const SALT: any = process.env.SALT

async function password_encrypt($pass: any){    
    return await bcrypt.hash($pass, SALT);
}

export default password_encrypt;