import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const PacientesContext = createContext()

const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState([])
    
    return (
        <PacientesContext.Provider value={{

        }}>
            {children}
        </PacientesContext.Provider>
    )
}

export default PacientesContext

export {
    PacientesProvider
}