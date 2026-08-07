import usePacientes from "../hooks/usePacientes"

export default function ListadoPacientes() {

    const { pacientes } = usePacientes()

    return (
        <>
            {pacientes.lenght ? (<>
                <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-xl mb-10 mt-5 text-center">
                    Administra tus  {' '}
                    <span className="text-indigo-600 font-bold"> Pacientes en este lugar</span>
                </p>
            </>) :
                (<>

                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mb-10 mt-5 text-center">
                        Comienza agregando pacientes {' '}
                        <span className="text-indigo-600 font-bold"> Y apareceran en este lugar</span>
                    </p>
                </>)}
        </ >
    )
}
