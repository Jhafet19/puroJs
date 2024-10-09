import {datosCita,nuevaCita} from '../Funciones'

import {
    mascotaInput, propietarioInput, telefonoInput,
    fechaInput, sintomasInput, horaInput, formulario
} from '../Selectores.js'
class app {
    constructor() {
        this.initApp();
    }

    initApp() {
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);
        formulario.addEventListener('submit', nuevaCita);

    }
}

export default App;