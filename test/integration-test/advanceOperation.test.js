const calculator = require("../../src/advanceOperation");

describe('Integration Testing', () => {
    describe.each([
        [2, 3, 8, 2],
        [5, 4, 625, 1], 
        [3, 12, 531441, 3], 
        [4, 6, 4096, 4] 
    ])('pow(a, b) and modulo(a, b)', (a, b, powExpected, moduloExpected) => {
        test(`pow(${a}, ${b}) and modulo(${a}, ${b})`, () => {
            const powResult = calculator.pow(a, b);
            const moduloResult = calculator.modulo(a, b);
            
            expect(powResult).toBe(powExpected);
            expect(moduloResult).toBe(moduloExpected);
        });
    });
});
