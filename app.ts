require('dotenv').config()
import express from "express"
import cors from 'cors'
import basicRoutes from './routes/basicRoutes'

let app: any = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('', basicRoutes)


const PORT: any = process.env.PORT

app.listen(PORT, (req: any, res: any) => {
    console.log(`listening on port ${PORT}`)
})