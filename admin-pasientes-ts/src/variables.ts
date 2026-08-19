import { generarId } from "./funciones"

interface Cita {
    [key: string]: string,
    id: string,
    paciente: string,
    propietario: string,
    email: string,
    fecha: string,
    sintomas: string
}

let editando = {
    value: false
}

// Objeto de Cita
const citaObj: Cita = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}