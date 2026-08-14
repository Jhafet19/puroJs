import emailOlvidePassword from "../helpers/emailOlvidePassword.js"
import emailRegistro from "../helpers/emailRegistro.js"
import generarId from "../helpers/generarId.js"
import generarJWT from "../helpers/generarJWT.js"
import Veterinario from "../models/veterinario.js"

const registrar = async (req, res) => {

    const { email, nombre } = req.body
    const existeUsuario = await Veterinario.findOne({ email })
    if (existeUsuario) {
        console.log('Existe usuario')
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({ message: error.message })
    }

    try {
        const veterinario = new Veterinario(req.body)
        const veterinarioGuardado = await veterinario.save()

        emailRegistro({ email, nombre, token: veterinarioGuardado.token })

        res.json(veterinarioGuardado)

    } catch (error) {
        console.log("🚀 ~ registrar ~ error:", error)
    }


}

const perfil = (req, res) => {
    console.log(req.veterinario)
    const { veterinario } = req
    res.json({ perfil: veterinario })
}

const confirmar = async (req, res) => {

    const { token } = req.params
    const usuarioConfirmar = await Veterinario.findOne({ token })
    if (!usuarioConfirmar) {
        const error = new Error('Token no valido')
        return res.status(404).json({ msg: error.message })

    }
    console.log("🚀 ~ confirmar ~ usuarioConfirmar:", usuarioConfirmar)
    try {
        usuarioConfirmar.confirmado = true;
        usuarioConfirmar.token = null;
        await usuarioConfirmar.save()

        res.json({ msg: 'Usuuario Confirmado Correctamente' })

    } catch (error) {
        console.log("🚀 ~ confirmar ~ error:", error)

    }

}

const autenticar = async (req, res) => {
    const { email, password } = req.body

    const usuarioExiste = await Veterinario.findOne({ email })
    if (!usuarioExiste) {
        const error = new Error('El usurio no existe')
        return res.status(403).json({ msg: error.message })
    }
    if (!usuarioExiste.confirmado) {
        const error = new Error('Tu cuenta no esta confirmada')
        return res.status(403).json({ msg: error.message })
    }

    if (await usuarioExiste.comprobarPassword(password)) {

        usuarioExiste.token = generarJWT(usuarioExiste.id)
        return res.json({
            _id: usuarioExiste._id, nombre: usuarioExiste.nombre, email: usuarioExiste.email,
            token: usuarioExiste.token
        })

    } else {
        const error = new Error('El password es incorrecto')
        return res.status(403).json({ msg: error.message })
    }


    res.json({ msg: 'Autenticado' })
}

const olvidePassword = async (req, res) => {

    const { email } = req.body
    const existeVeterinario = await Veterinario.findOne({ email })
    if (!existeVeterinario) {
        const error = new Error('No existe el usuario')
        res.status(404).json({ msg: error.message })
    }
    try {
        existeVeterinario.token = generarId()
        await existeVeterinario.save()

        emailOlvidePassword({ email, nombre: existeVeterinario.nombre, token: existeVeterinario.token })

        res.json({ msg: 'Hemos enviado un mail con las instrucciones' })
    } catch (error) {
        console.log("🚀 ~ nuevoPassword ~ error:", error)

    }
}

const comprobarToken = async (req, res) => {

    const { token } = req.params
    const tokenValid = await Veterinario.findOne({ token })
    if (tokenValid) {
        res.json({ msg: "Token valido y el usuario existe" })
    } else {
        const error = new Error('Token no valido')
        res.status(400).json({ msg: error.message })
    }


}
const nuevoPassword = async (req, res) => {
    const { token } = req.params
    const { password } = req.body

    const veterinario = await Veterinario.findOne({ token })
    if (!veterinario) {
        const error = new Error('Hubo un error')
        return res.status(400).json({ msg: error.message })
    }

    try {

        veterinario.token = null
        veterinario.password = password
        await veterinario.save()
        res.json({ msg: 'Password modificado correctamente' })

    } catch (error) {
        console.log(error)
    }

}

const actualizarPassword = async (req, res) => {
    const veterinario = await Veterinario.findById(req.params.id)
    if (!veterinario) {
        const error = new Error('El veterinario no se encuentra')
        return res.status(400).json({ msg: error.message })
    }

    const { email } = req.body
    if (veterinario.email !== email) {
        const existeEmail = await Veterinario.findOne({ email })
        if (existeEmail) {
            const error = new Error('Hubo un error')
            return res.status(400).json({ msg: error.message })
        }


    }
    try {
        veterinario.nombre = req.body.nombre || veterinario.nombre;
        veterinario.email = req.body.email || veterinario.email;
        veterinario.web = req.body.web || veterinario.web;
        veterinario.telefono = req.body.telefono || veterinario.telefono;

        const veterinarioActualizado = await Veterinario.save()
        res.json(veterinarioActualizado)


    } catch (error) {
        console.error();

    }
}

const actualizarPerfil = async (req, res) => {


    const { pwd_actual, pwd_nuevo } = req.body
    const { id } = req.veterinario

    const veterinario = await Veterinario.findById(id)
    if (!veterinario) {
        const error = new Error('El veterinario no se encuentra')
        return res.status(400).json({ msg: error.message })
    }

    if (await veterinario.comprobarPassword(pwd_actual)) {

        veterinario.password = pwd_nuevo;
        await veterinario.save()
        res.json({ msg: 'Password almacenado correctamente' })
    } else {
        const error = new Error('El password actual es incorrecto')
        return res.status(400).json({ msg: error.message })
    }
    try {
        veterinario.nombre = req.body.nombre || veterinario.nombre;
        veterinario.email = req.body.email || veterinario.email;
        veterinario.web = req.body.web || veterinario.web;
        veterinario.telefono = req.body.telefono || veterinario.telefono;

        const veterinarioActualizado = await Veterinario.save()
        res.json(veterinarioActualizado)


    } catch (error) {
        console.error();

    }

}
export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
}