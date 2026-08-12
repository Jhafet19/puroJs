import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const PacientesContext = createContext()

const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})

    useEffect(() => {
        const obtenerPacientes = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios('/pacientes', config)
                console.log("🚀 ~ obtenerPacientes ~ data:", data)
                setPacientes(pacientes)
            } catch (error) {
                console.error(error);

            }

        }
        obtenerPacientes()
    }, [])
    const guardarPaciente = async (paciente) => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        if (paciente.id) {
            console.log('EDITANDO')
            try {
                const { data } = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config)
                console.log("🚀 ~ guardarPaciente ~ data:", data)
                const pacientesActualizado = pacientes.map((pacienteState) => { pacienteState._id === data._id ? data : pacienteState })

                setPacientes(pacientesActualizado)
            } catch (error) {
                console.error(error);

            }

        } else {
            try {

                const { data } = await clienteAxios.post('/pacientes', paciente, config)
                const { createAt, __v, updateAt, ...pacienteAlmacenado } = data
                setPacientes([pacienteAlmacenado, ...pacientes])
                console.log(pacienteAlmacenado)
                console.log(data)
            } catch (error) {
                console.error(error);

            }
        }

    }

    const setEdicion = (paciente) => {
        setPaciente(paciente)
    }

    const eliminarPaciente = async (id) => {
        const confirmar = confirm('¿Confirmar que deseas eliminar?')
        if (confirmar) {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.delete(`/pacientes/${id}`, config)
                const pacienetesActualizados = pacientes.filter(pacienteState => pacienteState._id !== id)
                setPacientes(pacienetesActualizados)

            } catch (error) {
                console.log
            }
        }

    }
    return (
        <PacientesContext.Provider value={{
            pacientes,
            guardarPaciente,
            setEdicion,
            paciente,
            eliminarPaciente
        }}>
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesContext

export {
    PacientesProvider,
}