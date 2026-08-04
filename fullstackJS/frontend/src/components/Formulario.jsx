
export default function Formulario() {
    return (
        <>
            <p className="text-lg text-center mb-10">
                Añade tus pacientes y {' '} <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            <form action="" className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
                <div className="mb-5">
                    <label htmlFor="mascota" className="text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input type="text" placeholder="Nombre de la mascota" id="mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                    <input type="text" placeholder="Nombre del propietario" id="propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email del Propietario</label>
                    <input type="email" placeholder="Email del propietario" id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">Fecha Alta</label>
                    <input type="date" id="fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="text-gray-700 uppercase font-bold">Email del Propietario</label>
                    <textarea id="sintomas" placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <input type="submit" value="Agregar paciente" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors" />
            </form>
        </>
    )
}
