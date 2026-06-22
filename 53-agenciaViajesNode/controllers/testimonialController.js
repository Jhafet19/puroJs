const guardarTestimonial = (req, res) => {
    console.log()
    const { nombre, correo, mensaje } = req.body
    const errores = []
    //Validar
    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vacio' })
    }
    if (correo.trim() === '') {
        errores.push({ mensaje: 'El Correo esta vacio' })
    }
    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacio' })
    }

    if (errores.length > 0) {
        res.render('testimoniales', {
            pagnina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {

    }



}

export {
    guardarTestimonial
}