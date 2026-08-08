import { useState } from "react"
import Alerta from "../components/Alerta"
import usePacientes from "../hooks/usePacientes"


export default function Formulario() {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [alerta, setAlerta] = useState({})
    const { pacientes, guardarPaciente } = usePacientes()


    const handleSubmit = (e) => {
        e.preventDefault()
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        setAlerta({})
        guardarPaciente({ nombre, email, propietario, fecha, sintomas })

    }
    const { msg } = alerta
    return (
        <>

            <p className="text-lg text-center mb-10">
                Añade tus pacientes y {' '} <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            {msg && <Alerta alerta={alerta} />}
            <form action="" className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input type="text" placeholder="Nombre de la mascota" id="nombre"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre} onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                    <input type="text" placeholder="Nombre del propietario" id="propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario} onChange={e => setPropietario(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email del Propietario</label>
                    <input type="email" placeholder="Email del propietario" id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email} onChange={e => setEmail(e.target.value)}

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">Fecha Alta</label>
                    <input type="date" id="fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha} onChange={e => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="text-gray-700 uppercase font-bold">Email del Propietario</label>
                    <textarea id="sintomas" placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas} onChange={e => setSintomas(e.target.value)}

                    />
                </div>
                <input type="submit" value="Agregar paciente" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors" />
            </form>
        </>
    )
}
