import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config()


const db = new Sequelize(process.env.DATABASE, process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
    host: process.env.HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pol: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAlias: false
})

export default db;