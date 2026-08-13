import { useState } from "react";
import AdminNav from "../components/AdminNav";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

export default function CambiarPassword() {
    const [alerta, setAlerta] = useState({})
    const { auth, guardarPassword } = useAuth()

    const [password, setPassword] = useState({
        pwd_actual: '',
        pwd_nuevo: ''
    })

    const handleSubmit = (e) => {
        e.preventeDefault()
        if (Object.values(password).some(campo => campo !== '')) {

            setAlerta({ msg: 'Todos los campos son obligatorios', error: true })
            return
        }
        if (password.pwd_nuevo.length < 6) {
            setAlerta({ msg: 'La contraseña debe de ser mayor a 6', error: true })
            return
        }
        guardarPassword(password)
    }
    const { msg } = alerta

    return (
        <>
            <AdminNav />
            <h2 className="font-black text-3xl text-center mt-10 ">Cambiar Password</h2>
            <p className="text-xl mt-5 mb-10 text-center ">Modifica tu {' '}
                <span className="font-bold text-indigo-600">Password aquí</span> </p>

            <div className="flex justify-center ">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5 ">
                    {msg && <Alerta alerta={alerta} />}

                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold text-gray-600 " >
                                Password Actual
                            </label>
                            <input type="password" value={password || ''} placeholder="Escribe tu password Actual"
                                onChange={(e => setPassword({ ...password, [e.target.name]: e.target.value }))}
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="pwd_actual" />
                        </div>

                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold text-gray-600 " >
                                Nuevo Password
                            </label>
                            <input type="password" value={password || ''} placeholder="Escribe tu Nuevo password"
                                onChange={(e => setPassword({ ...password, [e.target.name]: e.target.value }))}
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" name="pwd_nuevo" />
                        </div>

                        <input type="submit" value="Actulizar Password" className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg 
                                        uppercase w-full mt-5" />
                    </form>
                </div>
            </div>
        </>
    )
}
