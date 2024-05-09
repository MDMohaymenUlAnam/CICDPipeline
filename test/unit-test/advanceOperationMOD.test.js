const calculator = require("../../src/advanceOperation");

describe('Modulo', () => {
    describe.each([
        [1, 2, 1],
        [4, 5, 4],
        [3, 12, 3],
        [4, 6, 4]
    ])('BVA: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });

    describe.each([
        [0, 89, 0],
        [-17, -35, -17],
        [65, -12, 5],
        [-78, 24, -6]
    ])('DT: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });
});