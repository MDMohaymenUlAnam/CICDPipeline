const calculator = require("../../src/advanceOperation");

describe('Pow', () => {
    describe.each([
        [1, 2, 1],
        [4, 5, 1024],
        [3, 12, 531441],
        [4, 6, 4096]
    ])('BVA: pow(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(calculator.pow(a, b)).toBe(expected);
        });
    });

    describe.each([
        [0, 89, 0],
        [-17, -35, -8.595828691938621e-44],
        [65, -12, 1.758084399840934e-22],
        [-78, 24, 2.5719970407685146e+45]
    ])('DT: pow(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${expected}`, () => {
            expect(calculator.pow(a, b)).toBe(expected);
        });
    });
});

