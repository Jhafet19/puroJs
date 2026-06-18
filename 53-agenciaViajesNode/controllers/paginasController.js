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
    console.log("🚀 ~ paginaViajes ~ viajes:", viajes)
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


export {
    paginaInicio,
    paginaNotosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaContacto
}