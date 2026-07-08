import mongoose from "mongoose";

const veterinarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false
    }
})

const Veterinario = mongoose.model("Vetarinario", veterinarioSchema)
export default Veterinario