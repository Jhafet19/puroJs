import Veterinario from "../models/veterinario.js"

const registrar = async (req, res) => {

    const { email, password, nombre } = req.body
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

export {
    registrar,
    perfil
}