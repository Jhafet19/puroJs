import { createContext, useEffect, useState } from 'react'
import clienteAxios from '../config/axios'

const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')

            if (!token) {
                setCargando(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios.get(
                    '/veterinarios/perfil',
                    config
                )

                console.log(data)
                setAuth(data)
            } catch (error) {
                console.error(
                    error.response?.data?.msg || error.message
                )
                setAuth({})
            } finally {
                setCargando(false)
            }
        }

        autenticarUsuario()
    }, [])
    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({})
    }

    const actualizarPerfil = async (datos) => {
        const token = localStorage.getItem('token')

        if (!token) {
            setCargando(false)
            return
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const url = `/veterinarios/perfil/${datos._id}`
            const { data } = await clienteAxios(url, datos, config)
            return {
                msg: 'Almacenado Correctamente'
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }

        }
    }
    return (
        <AuthContext.Provider value={{ auth, setAuth, cargando, cerrarSesion, actualizarPerfil }}>
            {children}
        </AuthContext.Provider>
    )
}


export {
    AuthProvider
}

export default AuthContext

