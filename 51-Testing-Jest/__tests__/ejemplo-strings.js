const password = '123456';
describe('Valida que el Password no este vacio y tenga una extencion de 6 caracteres', () => {
    test('El password no debe estar vacio', () => {
        expect(password).not.toBe('');
    });
    test('El password debe tener una longitud de 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });
});