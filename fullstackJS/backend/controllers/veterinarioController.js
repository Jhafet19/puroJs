import generarId from "../helpers/generarId.js"
import generarJWT from "../helpers/generarJWT.js"
import Veterinario from "../models/veterinario.js"

const registrar = async (req, res) => {

    const { email } = req.body
    const existeUsuario = await Veterinario.findOne({ email })
    if (existeUsuario) {
        console.log('Existe usuario')
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({ message: error.message })
    }

    try {
        const veterinario = new Veterinario(req.body)
        const veterinarioGuardado = await veterinario.save()

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

        res.json({ token: generarJWT(usuarioExiste.id) })
        console.log('Password correcto')
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
export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
}