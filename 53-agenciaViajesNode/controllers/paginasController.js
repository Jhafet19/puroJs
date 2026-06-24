import { where } from "sequelize";
import { Viajes } from "../models/Viajes.js";
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio = async (req, res) => {
    //Consultar 3 viajes del modelo Viaje
    const promiseDB = []
    promiseDB.push(Viajes.findAll({ limit: 3 }))
    promiseDB.push(Testimonial.findAll({ limit: 3 }))

    try {
        const resultado = await Promise.all(promiseDB)
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[0]

        })
    } catch (error) {
        console.log("🚀 ~ paginaInicio ~ error:", error)
    }

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
const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log("🚀 ~ paginaTestimoniales ~ error:", error)

    }

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