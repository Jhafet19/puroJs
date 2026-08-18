import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario } from './selectores.ts'
import { datosCita, submitCita } from './funciones.ts'
import './style.css'

// Eventos
pacienteInput.addEventListener('change', datosCita)
propietarioInput.addEventListener('change', datosCita)
emailInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)
formulario.addEventListener('submit', submitCita)