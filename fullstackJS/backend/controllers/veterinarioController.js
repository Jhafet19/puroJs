const registrar = (req, res) => {
    res.send('Desde APi/Veterinarios')
}

const perfil = (req, res) => {
    res.send('Desde APi/Veterinarios/Login')
}

export {
    registrar,
    perfil
}