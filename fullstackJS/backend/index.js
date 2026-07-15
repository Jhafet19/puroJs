import express from "express";
import conectarDB from './config/db.js'
import dotenv from 'dotenv'
import veterinarioRoutes from './routes/veterinarioRoutes.js'
import pacienteRoutes from './routes/pacienteRoutes.js'
const app = express();
app.use(express.json())
dotenv.config()
conectarDB()

console.log()
const port = process.env.PORT || 4000

app.use('/api/veterinarios', veterinarioRoutes)
app.use('/api/pacientes', pacienteRoutes)


app.listen(port, () => {
    console.log('Escuchando el puerto ', port)
})