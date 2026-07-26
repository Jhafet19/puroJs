import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

export default function ConfirmarCuenta() {

  const params = useParams()
  const { id } = params
  const [alerta, setAlerta] = useState({})
  const [cuentaConfimada, setCuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)


  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `veterinarios/confirmar/${id}`
        const { data } = await clienteAxios(url)
        setCuentaConfirmada(true)
        setAlerta({ msg: data.msg, error: false })
      } catch (error) {
        setAlerta({ msg: error.response.data.msg, error: true })

      }
      setCargando(false)
    }
    confirmarCuenta()
  }, [])
  return (
    < >
      <div>
        <h1 className=" text-indigo-600 font-black text-6xl">Confirma tu cuenta y comienza a administrar  {' '}  <span className="text-black"> Tus Pacientes </span> </h1 >
      </div >
      <div action="" className="mt-20 md:mt-5 shadow-lg p-3  px5 py-10 rounded-xl bg-white" >
        {!cargando && <Alerta alerta={alerta} />}
        {cuentaConfimada && (
          <Link className="block text-center my-5  text-gray-500" to="/"> Inicia Sesión </Link>
        )}

      </div>


    </>
  )
}
