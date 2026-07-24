
import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from 'axios'
export default function Registrar() {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    async function handleSubmit(e) {
        e.preventDefault()
        console.log('Enviando formulario')
        if ([nombre, email, password, repetirPassword].includes('')) {
            setAlerta({
                msg: 'Hay campos vacios',
                error: true
            })
            return
        }
        if (password !== repetirPassword) {
            setAlerta({ msg: 'Los passwords no son iguales', error: true })
            return
        }
        if (password.length < 6) {
            setAlerta({ msg: 'El password es muy corto', error: true })
        }
        console.log('Todo bien ')
        setAlerta({})

        try {
            const url = 'http://localhost:4000/api/veterinarios'
            const res = await axios.post(url, { nombre, email, password })
            console.log(res)
            setAlerta({ msg: 'Creado Correctamente, revisa tu email', error: false })
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error.response.data.message)
            setAlerta({ msg: error.response.data.message, error: true })

        }
    }

    const { msg } = alerta

    return (
        < >
            <div>
                <h1 className=" text-indigo-600 font-black text-6xl">Crea tu Cuenta y Administra{' '}  <span className="text-black"> Tus Pacientes </span> </h1 >
            </div >
            <div>
                <form action="" className="mt-20 md:mt-5 shadow-lg p-3  px5 py-10 rounded-xl bg-white" onSubmit={handleSubmit}>
                    {msg && <Alerta alerta={alerta} />}

                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Nombre</label>
                        <input type="text" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Tu Nombres" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Email</label>
                        <input type="email" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Email de registro" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Password</label>
                        <input type="password" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Tu password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Repetir Password</label>
                        <input type="password" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="repite tu password" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} />
                    </div>
                    <input type="submit" value='Crear Cuenta' className="rounded-xl md:w-auto bg-indigo-700 w-full py-2 text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800" />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between ">
                    <Link className="block text-center my-5  text-gray-500" to="/">¿Ya tienes una cuenta? Inicia Sesión </Link>
                    <Link className="block text-center my-5  text-gray-500" to="/olvide-password">Olvide mi Password</Link>
                </nav>
            </div>
        </>
    )
}
