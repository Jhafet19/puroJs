import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios.jsx"

export default function OlvidePassword() {

    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})

    async function handleSubmit(e) {
        e.preventDefault()
        if (email === '' || email.length > 3) {
            setAlerta({ msg: 'El email es obligatorio', error: true })
        }
        try {
            const { data } = await clienteAxios.post('veterinarios/olvide-password', { email })
            console.log("🚀 ~ handleSubmit ~ data:", data.msg)

            setAlerta(data.msg)

        } catch (error) {
            console.error(error);
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })

        }
    }
    const { msg } = alerta

    return (
        < >
  
            <div>
                <h1 className=" text-indigo-600 font-black text-6xl">Recupera tu Acceso y no pierdas{' '}  <span className="text-black"> Tus Pacientes </span> </h1 >

            </div>
            <form action="" className="mt-20 md:mt-5 shadow-lg p-3  px5 py-10 rounded-xl bg-white" onSubmit={handleSubmit}>
                {msg && <Alerta alerta={alerta} />}

                <div className="my-5">
                    <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Email</label>
                    <input type="email" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Email de registro"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <input type="submit" value='Enviar Instrucciones' className="rounded-xl md:w-auto bg-indigo-700 w-full py-2 text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800" />
            </form>

            <nav className="mt-10 lg:flex lg:justify-between ">
                <Link className="block text-center my-5  text-gray-500" to="/">¿Ya tienes una cuenta? Inicia Sesión </Link>
                <Link className="block text-center my-5  text-gray-500" to="/registrar">¿No tienes una cuenta?, Crea una </Link>

            </nav>
        </>
    )
}
