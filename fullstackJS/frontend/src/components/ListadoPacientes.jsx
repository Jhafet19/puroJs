import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente"

export default function ListadoPacientes() {

    const { pacientes } = usePacientes()
    console.log("🚀 ~ ListadoPacientes ~ pacientes:", pacientes)

    return (
        <>
            {pacientes.lenght ? (<>
                <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-xl mb-10 mt-5 text-center">
                    Administra tus  {' '}
                    <span className="text-indigo-600 font-bold"> Pacientes en este lugar</span>
                    {pacientes.map((paciente) => {
                        <Paciente key={paciente._id}
                            paciente={paciente}
                        />
                    })}
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
