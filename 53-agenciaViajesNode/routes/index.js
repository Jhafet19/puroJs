import express from 'express'
import { paginaInicio, paginaNotosotros, paginaContacto, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js'

const router = express.Router()

router.get('/', paginaInicio)
router.get('/nosotros', paginaNotosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:viaje', paginaDetalleViaje)

router.get('/testimoniales', paginaTestimoniales)

router.get('/contacto', paginaContacto)

export default router