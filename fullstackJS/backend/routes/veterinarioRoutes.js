import express from 'express'
import { perfil, registrar, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword } from '../controllers/veterinarioController.js'
import checkAuth from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', registrar)
router.get('/confirmar/:token', confirmar)
router.post('/login', autenticar)
router.post('/olvide-password', olvidePassword)
router.get('/olivide-password/:token', comprobarToken)
router.post('/olivide-password/:token', nuevoPassword)

router.get('/perfil', checkAuth, perfil)


export default router