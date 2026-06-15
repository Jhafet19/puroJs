import express from 'express'
import router from "./routes/index.js";


const app = express()
const port = process.env.PORT || 4000

app.use('/', router)

app.use(express.static('public'))

app.set('view engine', 'pug')

app.listen(port, () => {
    console.log('El servidor esta escuchando el puerto ', port)
})