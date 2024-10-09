import { cliente } from './cliente'


class Empresa extends cliente {

    constructor(nombre, ahorro, categoria) {
        super(nombre,ahorro)
        this.categoria=categoria
    }

}
