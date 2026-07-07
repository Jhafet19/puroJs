import express from "express";
import conectarDB from './config/db.js'
const app = express();
conectarDB()

const port = 4000

app.use('/', (req, res) => {
    res.send('Hola Mundo desde vs')
})

app.listen(port, () => {
    console.log('Escuchando el puerto ', port)
})