import Paciente from "../models/Paciente.js"


const agregarPaciente = async (req, res) => {
    const paciente = new Paciente(req.body)
    console.log(paciente)
    try {

        
    } catch (error) {
        console.log(error)
    }

}
const obtenerPaciente = async (req, res) => {

}

export {
    agregarPaciente,
    obtenerPaciente
}