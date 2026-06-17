import express from 'express'
import { paginaInicio, paginaNotosotros, paginaContacto, paginaViajes, paginaTestimoniales } from '../controllers/controller.js'

const router = express.Router()

router.get('/', paginaInicio)
router.get('/nosotros', paginaNotosotros)

router.get('/viajes', paginaViajes)

router.get('/testimoniales', paginaTestimoniales)

router.get('/contacto', paginaContacto)

export default router