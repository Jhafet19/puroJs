import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

export default function NuevoPassword() {
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  const [tokenValida, setTokenValido] = useState(false)
  const [passwordModificado, setPasswordModificado] = useState(false)
  const params = useParams()
  const { token } = params

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`)
        setAlerta({ msg: 'Coloca Tu Nuevo Password' })
        setTokenValido(true)
      } catch (error) {
        setAlerta({ msg: 'Hubo un error con el enlace', error: true })
      }
    }

  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (password.length < 6) {
      setAlerta({ msg: 'El Password debe ser minimo de 6 caracteres', error: true })
    }

    try {
      const url = `/veterinarios/olvide-password/${token}`
      const { data } = await clienteAxios.post(url, { password })
      console.log("🚀 ~ handleSubmit ~ data:", data)

      setAlerta({ msg: data.msg })
      setPasswordModificado(true)
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true })

    }
  }
  const { msg } = alerta
  return (
    <>
      <div>
        <h1 className=" text-indigo-600 font-black text-6xl">Reestablece tu Password y no pierdas acceso a {' '}  <span className="text-black"> Tus Pacientes </span> </h1 >
      </div >
      <div className="mt-20 md:mt-5 shadow-lg p-3  px5 py-10 rounded-xl bg-white" >
        {tokenValida && (
          <>
            <form onSubmit={handleSubmit}>
              {msg && <Alerta alerta={alerta} />}

              <div className="my-5">
                <label htmlFor="" className=" uppercase text-gray-600  block text-xl font-bold">Nuevo Password</label>
                <input type="password" name="" id="" className=" border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Tu nuevo password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <input type="submit" value='Reestablecer nuevo Password' className="rounded-xl md:w-auto bg-indigo-700 w-full py-2 text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800" />
            </form>

            {passwordModificado && <Link className="block text-center my-5  text-gray-500" to="/">
            ¿Ya tienes una cuenta? Inicia Sesión </Link>}

          </>
        )}


      </div>
    </>
  )
}
