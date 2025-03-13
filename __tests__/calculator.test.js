const { calculate } = require('../backend/utils/calculator');

// Test de l'addition
test('Addition', () => {
    expect(calculate(2, 3, '+')).toBe(5);
});
// Test de la soustraction
test('Soustraction', () => {
    expect(calculate(5, 3, '-')).toBe(2);
});
// Test de la multiplication
test('Multiplication', () => {
    expect(calculate(4, 2, '*')).toBe(8);
});
// Test de la division
test('Division', () => {
    expect(calculate(10, 2, '/')).toBe(5);
});
// Test du modulo
test('Modulo', () => {
    expect(calculate(10, 3, '%')).toBe(1);
});
// Test de l'exponentiation
test('Exponentiation', () => {
    expect(calculate(2, 3, '^')).toBe(8);
});
