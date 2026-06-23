import { Testimonial } from '../models/Testimoniales.js'
const guardarTestimonial = async (req, res) => {
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
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagnina: 'Testimoniales',
            testimoniales,
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        //Almacenarlo en la bd
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log("🚀 ~ guardarTestimonial ~ error:", error)
        }
    }



}

export {
    guardarTestimonial
}