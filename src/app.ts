require('dotenv').config()
import express from "express"
import cors from 'cors'
import basicRoutes from './routes/basicRoutes'
import databaseConnection from './database/database'


let app: any = express()

const startServer = async () => {

    const dbURI: any = process.env.DBURI
    await databaseConnection(dbURI)

    app.use(cors())

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))


    app.use('', basicRoutes)

    const PORT: any = process.env.PORT

    app.listen(PORT, (req: any, res: any) => {
        console.log(`listening on port ${PORT}`)
    })
    .on('error', (err: any) => {
        console.log(err)
        process.exit()
    })
}

startServer()