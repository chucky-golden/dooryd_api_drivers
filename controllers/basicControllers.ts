import Driver from '../models/drivers'
import passwordHash from '../middlewares/passwordEncrypt'
import onlyPhoneExist from '../middlewares/detailsExists'
import jwt from 'jsonwebtoken'


// driver login
const login = async (req: any, res: any) => {
    try{        
        let password: string = await passwordHash(req.body.password)


        const driver: any = await Driver.findOne({ phone: req.body.phone }); 
        if (driver) { 
            //check if password matches and create token
            const result: boolean = password === driver.password; 
          if (result) {

            const JWT_SECRET: any = process.env.JWT_SECRET
            const token: any = await jwt.sign(
                { id: driver._id },
                JWT_SECRET,
                {
                  expiresIn: "10h",
                }
            );

            res.json({ message: 'login successful', data: driver, token: token }) 

          } else { 
                res.status(400).json({ error: "password doesn't match" }); 
          } 
        } else { 
            res.status(400).json({ error: "driver account doesn't exist" }); 
        }

    }catch (error) {
        console.log(error)
        res.json({ message: 'error processing request' })
    }
}



// driver registration
const register = async (req: any, res: any) => {
    try{
        let details: boolean = await onlyPhoneExist(req.body.phone);
        if(details === false){             

            let password: string = await passwordHash(req.body.password)

            let info: object = {
                phone: req.body.phone,
                password: password,
            }

            const driver: any = await new Driver(info).save()
            if(driver !== null){
                
                const JWT_SECRET: any = process.env.JWT_SECRET
                const token: any = await jwt.sign(
                    { id: driver._id },
                    JWT_SECRET,
                    {
                      expiresIn: "10h",
                    }
                );

                res.json({ message: 'account created', data: driver, token: token })
            }else{
                res.json({ message: 'error creating account' })
            }
        }else{
            res.json({message: "driver with phone number already exists"});
        }

    }catch (error) {
        console.log(error)
        res.json({ message: 'error processing request' })
    }
}




// admin forgot password
const adminForgot = async (req: any, res: any) => {
    try{
        let phone: string = req.body.phone;  

        let details: boolean = await onlyPhoneExist(phone);
        
        if(details === true){  

            // send OTP

        }else{
            res.json({ message: 'email address does not exist' })
        }
    }catch(error){
        console.log(error)
        res.json({ message: 'error processing request' })
    }
}



// admin rest password
const adminReset = async (req: any, res: any) => {
    try{
        
        let phone: string = req.body.phone;
        let password: string = await passwordHash(req.body.password);

        const driver:any = await Driver.update({ password:password }, { where: { phone: phone }})

        if(driver !== null){
            res.json({ message: "password changed", data: driver })
        }else{
            res.json({ message: "error reseting password", data: driver }) 
        }

    }catch(error){
        console.log(error)
        res.json({ message: 'error processing request' })
    }
}




const fetchAdmin = async (req: any, res: any) => {
    try{

        let id: any = req.body.id
        const driver: object = await Driver.findOne({ _id: id });

        if(driver !== null){
            res.json({ message: driver })
        }else{
            res.json({ message: 'no driver found' })
        }

    }catch(error){
        console.log(error)
        res.json({ message: 'error processing request' })
    }
}



export default  {
    login,
    register,
    adminForgot,
    adminReset,
    fetchAdmin
}