'use strict';

let calculator = require('../index');

describe('calculator', () => {
    let instance;

    beforeAll(() => {
        instance = new calculator();
    });

    it('should add 2 values using addUs2() method from calculator class', () => {
        expect(instance.addUs2(1, 1)).toBe(2);
        expect(instance.addUs2(2, 2)).toBe(4);
        expect(instance.addUs2(3, 4)).toBe(7);
        expect(instance.addUs2(100, 0)).toBe(100);
        expect(instance.addUs2(6, -7)).toBe(-1);
    });
    
    it('should add 3 values using addUs3() method from calculator class', () => {
        expect(instance.addUs3(1, 1, 1)).toBe(3);
        expect(instance.addUs3(2, 2, 2)).toBe(6);
        expect(instance.addUs3(3, 4, 5)).toBe(12);
        expect(instance.addUs3(100, 0, 1)).toBe(101);
        expect(instance.addUs3(6, -7, 8)).toBe(7);
    });

    it('should multiply 2 values using multiplyUs2() method from calculator class', () => {
        expect(instance.multiplyUs2(1, 1)).toBe(1);
        expect(instance.multiplyUs2(2, 2)).toBe(4);
        expect(instance.multiplyUs2(3, 4)).toBe(12);
        expect(instance.multiplyUs2(6, -7)).toBe(-42);
        expect(instance.multiplyUs2(100, 0)).toBe(0);
    });

    it('should multiply 3 values using multiplyUs3() method from calculator class', () => {
        expect(instance.multiplyUs3(1, 1, 1)).toBe(1);
        expect(instance.multiplyUs3(2, 2, 2)).toBe(8);
        expect(instance.multiplyUs3(3, 4, 5)).toBe(60);
        expect(instance.multiplyUs3(6, -7, 8)).toBe(-336);
        expect(instance.multiplyUs3(100, 0, 1)).toBe(0);
    });
});