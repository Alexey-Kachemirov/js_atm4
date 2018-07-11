'use strict';

let calculator = require('../index');

describe('calculator', () => {
    let instance;

    beforeAll(() => {
        instance = new calculator();
    });

    it('should verify "sum" method is a function', () => {
        expect(typeof instance.sum).toBe('function');
    });

    it('should calculate sum of 1 value using "sum" method from "calculator" class ', () => {
        expect(instance.sum(6)).toBe(6);
    });

    it('should calculate sum of 2 values using "sum" method from "calculator" class ', () => {
        expect(instance.sum(6, 7)).toBe(13);
    });

    it('should calculate sum of 3 values using "sum" method from "calculator" class ', () => {
        expect(instance.sum(6, 7, 8)).toBe(21);
    });

    it('should verify "mult" method is a function', () => {
        expect(typeof instance.mult).toBe('function');
    });

    it('should calculate multiplication of 1 value using "mult" method from "calculator" class ', () => {
        expect(instance.mult(3)).toBe(3);
    });

    it('should calculate multiplication of 2 values using "mult" method from "calculator" class ', () => {
        expect(instance.mult(3, 4)).toBe(12);
    });

    it('should calculate multiplication of 3 values using "mult" method from "calculator" class ', () => {
        expect(instance.mult(3, 4, 5)).toBe(60);
    });
});