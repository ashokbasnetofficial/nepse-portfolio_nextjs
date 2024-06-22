import mongoose from "mongoose";
const connection: { isConnected?: number } = {};
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI! as string,{
            dbName:'MeroPortfolio'
        });
        connection.isConnected = db.connections[0].readyState;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error; 
    }
}
export default dbConnect;
