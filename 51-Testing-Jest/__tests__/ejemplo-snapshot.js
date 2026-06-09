const cliente = {
    nombre: 'Jhafet 2',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('Debe de ser un cliente Premium', () => {
        expect(cliente).toMatchSnapshot();
    })
});