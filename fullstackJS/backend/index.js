import express from "express";
import conectarDB from './config/db.js'
import dotenv from 'dotenv'
import veterinarioRoutes from './routes/veterinarioRoutes.js'
import pacienteRoutes from './routes/pacienteRoutes.js'
import cors from "cors";
const app = express();
app.use(express.json())
dotenv.config()
conectarDB()
const dominiosPermitidos = ['http://localhost:5173']
const corsOptions = {
    origin: function (origin, callback) {
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('No permitido por CORS'))
        }
    }
}
app.use(cors(corsOptions))
console.log()
const port = process.env.PORT || 4000

app.use('/api/veterinarios', veterinarioRoutes)
app.use('/api/pacientes', pacienteRoutes)


app.listen(port, () => {
    console.log('Escuchando el puerto ', port)
})