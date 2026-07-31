import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"


export default function Login() {
    const { auth } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const navigate = useNavigate()

    const { msg } = alerta
    const handleSubmit = async (e) => {
        e.preventDefault()
        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/login', { email, password })
            console.log("🚀 ~ handleSubmit ~ data:", data)
            localStorage.setItem('token', data.token)

            navigate('/admin')
        } catch (error) {
            console.error();
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })

        }

    }

    return (
        < >
            <div>
                <h1 className=" text-indigo-600 font-black text-6xl">Inicia Sesión y Administra Tus <span className="text-black"> Pacientes</span> </h1 >
            </div >
            <div>
                {msg && < Alerta alerta={alerta} />}
                <form action="" className="mt-20 md:mt-5 shadow-lg p-3  px5 py-10 rounded-xl bg-white" onSubmit={handleSubmit}>

                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Email</label>
                        <input type="email" name="" id="" onChange={e => setEmail(e.target.value)} value={email}
                            className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Email de registro" />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Password</label>
                        <input type="password" name="" id="" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Password de registro" />
                    </div>
                    <input type="submit" value='Iniciar Sesión' className="rounded-xl md:w-auto bg-indigo-700 w-full py-2 text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800" />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between ">
                    <Link className="block text-center my-5  text-gray-500" to="/registrar">¿No tienes una cuenta?, Crea una </Link>
                    <Link className="block text-center my-5  text-gray-500" to="/olvide-password">Olvide mi Password</Link>
                </nav>
            </div>

        </>
    )
}
