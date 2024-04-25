import mongoose from "mongoose"

const databaseConnection = async (dbURI: string) => {
    
    try {
        await mongoose.connect(dbURI);
        console.log('Connected to db');
    } catch (err) {
        console.error('Error connecting to db:', err);
    } 
}


export default databaseConnection