import Citas from '../src/citas';

describe('Probar la clase de Citas', () => {
    const citas = new Citas();
    const id = Date.now();
    test('Agregar una nueva cita', () => {
        const citasObj = {
            mascotas: 'Perro',
            propietario: 'Juan',
            telefono: '123456789',
            fecha: '2024-06-01',
            hora: '10:00',
            sintomas: 'Fiebre y tos',
        }
        citasObj.id = id
        citas.agregarCita(citasObj);
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar una cita', () => {
        const citaActualizada = {
            id: id,
            mascotas: 'Gato',
            propietario: 'Maria',
            telefono: '987654321',
            fecha: '2024-06-02',
            hora: '11:00',
            sintomas: 'Dolor de estómago',
        }
        citas.actualizarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    })
    test('Eliminar una cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    })
});