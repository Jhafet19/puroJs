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

export {
    registrar,
    perfil,
    confirmar
}