const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
describe('Testing al carrito de compras', () => {
    test('El carrito no esta vacio', () => {
        expect(carrito).not.toHaveLength(0);
    });
    test('El carrito tiene 3 productos', () => {
        expect(carrito).toHaveLength(3);
    });
});