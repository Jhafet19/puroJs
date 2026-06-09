const cliente = {
    nombre: 'Jhafet',
    balance: 500,
}

describe('Testing al Cliente', () => {
    test('El cliente es Premium,', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });
    test('El cliente se llama Jhafet', () => {
        expect(cliente.nombre).toBe('Jhafet');
    });
})