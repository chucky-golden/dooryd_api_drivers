import Kyc from '../models/kyc'
import Pay from '../models/paymentDetails'


// driver kyc submission
const kycSub = async (req: any, res: any) => {
    try{

        const { id, fname, lname, email, gender, vmodel, license, vcolor, jtb, pdlicense, excar, intcar, pvlicense, proad, govtid, hackney, pcarown, vinscert, nin, photo, billing, fullname, address, regcode, vat, vatnum, actname, actnum, swift, nok, nokphone } = req.body

        const kyc: any = await new Kyc.create({
            id: id, fname: fname, lname: lname, email: email, gender: gender, vmodel: vmodel, license: license, vcolor: vcolor, jtb: jtb, pdlicense: pdlicense, excar: excar, intcar: intcar, pvlicense: pvlicense, proad: proad, govtid: govtid, hackney: hackney, pcarown: pcarown, vinscert: vinscert, nin: nin, photo
        })
        if(kyc){

            const pay: any = await new Pay.create({
                id: id, billing: billing, fullname: fullname, address: address, regcode: regcode, vat: vat, vatnum: vatnum, actname: actname, actnum: actnum, swift: swift, nok: nok, nokphone: nokphone
            })

            if(pay){
                res.status(200).json({ message: 'validation successful', data: id })
            }else{
                res.status(501).json({ message: 'error completing verification', data: id })
            }

        }else{
            res.status(501).json({ message: 'error completing kyc' })
        }

    }catch (error) {
        console.log(error)
        res.status(501).json({ message: 'error processing request' })
    }
}



export default  {
    kycSub
}