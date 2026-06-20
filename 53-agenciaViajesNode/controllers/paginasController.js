import { where } from "sequelize";
import { Viajes } from "../models/Viajes.js";
const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
}
const paginaNotosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}
const paginaViajes = async (req, res) => {
    const viajes = await Viajes.findAll();

    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    })
}
const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
}
const paginaContacto = (req, res) => {
    res.render('contacto', {
        pagina: 'Contacto'
    })
}


const paginaDetalleViaje = async (req, res) => {
    const { viaje } = req.params
    console.log("🚀 ~ paginaDetalleViaje ~ viaje:", viaje)
    try {

        const resultado = await Viajes.findOne({ where: { slug: viaje } })
        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNotosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaContacto,
    paginaDetalleViaje
}