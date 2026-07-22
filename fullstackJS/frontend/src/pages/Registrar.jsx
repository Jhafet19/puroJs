
import { Link } from "react-router-dom"

export default function Registrar() {
    return (
        < >
            <div>
                <h1 className=" text-indigo-600 font-black text-6xl">Crea tu Cuenta y Administra{' '}  <span className="text-black"> Tus Pacientes </span> </h1 >
            </div >
            <div>
                <form action="" className="mt-20 md:mt-5 shadow-lg p-3  px5 py-10 rounded-xl bg-white">
                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Nombre</label>
                        <input type="text" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Tu Nombres" />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Email</label>
                        <input type="email" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Email de registro" />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Password</label>
                        <input type="password" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Tu password" />
                    </div>
                    <div className="my-5">
                        <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Repetir Password</label>
                        <input type="password" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="repite tu password" />
                    </div>
                    <input type="submit" value='Iniciar Sesión' className="rounded-xl md:w-auto bg-indigo-700 w-full py-2 text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800" />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between ">
                    <Link className="block text-center my-5  text-gray-500" to="/">¿Ya tienes una cuenta? Inicia Sesión </Link>
                    <Link className="block text-center my-5  text-gray-500" to="/olvide-password">Olvide mi Password</Link>
                </nav>
            </div>
        </>
    )
}
