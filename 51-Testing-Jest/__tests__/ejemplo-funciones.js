function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}

describe('Testing a las funciones de sumar y restar', () => {
    test('Sumar 30 + 20 debe ser igual a 50', () => {
        expect(sumar(30, 20)).toBe(50);
    });

    test('Restar 10 - 5 debe ser igual a 5', () => {
        expect(restar(10, 5)).toBe(5);
    });

    test('Restar 10 - 5 no debe ser igual a 4', () => {
        expect(restar(10, 5)).not.toBe(4);
    });

    test('Sumar 10 + 5 no debe ser igual a 20', () => {
        expect(sumar(10, 5)).not.toBe(20);
    });
})