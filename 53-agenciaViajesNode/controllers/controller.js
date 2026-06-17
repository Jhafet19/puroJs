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
const paginaViajes = (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
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