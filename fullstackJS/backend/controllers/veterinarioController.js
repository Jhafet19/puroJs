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

const confirmar = (req, res) => {
    console.log(req.params.token)
    res.json({ msg: 'Confirmando Cuenta' })
}

export {
    registrar,
    perfil,
    confirmar
}