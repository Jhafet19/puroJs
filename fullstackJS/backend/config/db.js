import mongoose from "mongoose";
import moongose from "mongoose";

const conectarDB = async () => {
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/apv")

        const url = `${db.connection.host}:${db.connection.port}`
        console.log("🚀 ~ Mongo conectado en  ~ url:", url)

    } catch (error) {
        console.log("🚀 ~ conectarDB ~ error:", error.message)
        process.exit(1)

    }
};

export default conectarDB;