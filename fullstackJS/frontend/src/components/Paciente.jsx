import usePacientes from "../hooks/usePacientes"

export default function Paciente({ paciente }) {
    const { email, fecha, nombre, propietario, sintomas, _id } = paciente
    const { setEdicion, eliminarPaciente } = usePacientes
    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(nuevaFecha)
    }
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase  text-indigo-600  my-2">Nombre: {' '}
                <span className="font-normal normal-case"> {nombre} </span>
            </p>
            <p className="font-bold uppercase  text-indigo-600 my-2">Propietario:{' '}
                <span className="font-normal normal-case"> {propietario} </span>
            </p>
            <p className="font-bold uppercase  text-indigo-600  my-2">Email de contacto: {' '}
                <span className="font-normal normal-case"> {email} </span>
            </p>
            <p className="font-bold uppercase  text-indigo-600  my-2 ">Fecha alta:{' '}
                <span className="font-normal normal-case"> {formatearFecha(fecha)} </span>
            </p>
            <p className="font-bold uppercase  text-indigo-600  my-2">Sintomas:{' '}
                <span className="font-normal normal-case"> {sintomas} </span>
            </p>
            <div className="flex justify-between my-5">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg " onClick={() => setEdicion(paciente)} >Editar</button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg " 
                onClick={() => eliminarPaciente(_id)}>Indigar</button>
            </div>
        </div>
    )
}
