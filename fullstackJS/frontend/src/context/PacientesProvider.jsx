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
        console.log("🚀 ~ guardarPaciente ~ paciente:", paciente)
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.post('/pacientes', paciente, config)
            const { createAt, __v, updateAt, ...pacienteAlmacenado } = data
            setPacientes([pacienteAlmacenado, ...pacientes])
            console.log(pacienteAlmacenado)
            console.log(data)
        } catch (error) {
            console.error(error);

        }
    }

    const setEdicion = (paciente) => {
setPaciente(paciente)
    }
    return (
        <PacientesContext.Provider value={{
            pacientes,
            guardarPaciente,
            setEdicion
        }}>
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesContext

export {
    PacientesProvider,
}