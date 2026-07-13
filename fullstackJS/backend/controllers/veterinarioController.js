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
    res.json({ url: 'Desde APi/Veterinarios/Perfil' })
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

export {
    registrar,
    perfil,
    confirmar,
    autenticar
}