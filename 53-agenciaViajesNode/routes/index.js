import express from 'express'
import { paginaInicio, paginaNotosotros, paginaContacto, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js'
import { guardarTestimonial } from '../controllers/testimonialController.js'
const router = express.Router()

router.get('/', paginaInicio)
router.get('/nosotros', paginaNotosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:viaje', paginaDetalleViaje)

router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)

router.get('/contacto', paginaContacto)

export default router