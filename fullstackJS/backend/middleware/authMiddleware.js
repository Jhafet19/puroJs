import jwt from "jsonwebtoken";
import Veterinario from "../models/veterinario.js";

const checkAuth = async (req, res, next) => {
    const authorization = req.headers.authorization;
    console.log("🚀 ~ checkAuth ~ authorization:", authorization)

    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(403).json({
            msg: "Token no válido"
        });
    }

    try {
        const token = authorization.split(" ")[1];
        console.log("🚀 ~ checkAuth ~ token:", token)

        if (!token) {
            return res.status(403).json({
                msg: "Token no válido"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("🚀 ~ checkAuth ~ decoded:", decoded)
        const veterinario = await Veterinario
            .findById(decoded.id)
            .select("-password -token -confirmado");

        if (!veterinario) {
            return res.status(404).json({
                msg: "Veterinario no encontrado"
            });
        }

        req.veterinario = veterinario;
        console.log('Despues de verificar')

        return next();
    } catch (error) {
        console.error("Error en checkAuth:", error.message);

        return res.status(403).json({
            msg: "Token no válido"
        });
    }
};

export default checkAuth;