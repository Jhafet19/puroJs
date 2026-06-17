import Sequelize from "sequelize";

const db = new Sequelize('agenciaviajes', ' ', ' ', {
    host: '127.0.0.1',
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