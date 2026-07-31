import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RutaProtegida() {
    const { auth, cargando } = useAuth()
    console.log(auth)
    if (cargando) return 'Cargando...'
    return (
        < >
            <Header />
            {auth?.perfil._id ? <Outlet /> : <Navigate to={"/"} />}
            <Footer />

        </>
    )
}
