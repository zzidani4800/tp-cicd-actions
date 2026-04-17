const { add, subtract, multiply, factorial } = require('../src/math');

describe('Tests du module Math', () => {
  test('Addition de 2 + 3 doit donner 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('Soustraction de 5 - 2 doit donner 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('Multiplication de 4 * 3 doit donner 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('Factorielle de 5 doit donner 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('La factorielle d\'un nombre négatif doit lever une erreur', () => {
    expect(() => factorial(-1)).toThrow('Nombre négatif non autorisé');
  });
});