/*
 * @title Calculator
 * @description Tests for the Calculator component
 */

/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import {Calculator} from "./calculator";

/*********************************************************************************
 2. TESTS
 *********************************************************************************/

describe("Testing that Jasmine is loaded", () => {
    it("true is true", () => {
        expect(true).toBe(true);
    });
    it("false is not true", () => {
        expect(false).not.toBe(true);
    });
});

describe("Testing that Calculator class is loaded", () => {
    it("ping() returns \'pong\'", () => {
        expect(Calculator.ping()).toBe("pong");
    });
});

describe("Testing addition", () => {
    const input = [
        [1, 2],
        [0, 4],
        [-3, 3],
    ];
    const output = [ 3, 4, 0 ];
    function testAddition(x, y, z) {
        it(x + " + " + y + " = " + z, () => {
            expect(Calculator.add(x, y)).toEqual(z);
        });
    }
    for (let i = 0; i < input.length; i++) {
        testAddition(input[i][0], input[i][1], output[i]);
    }
});

describe("Testing division", () => {
    const input = [
        [1, 2],
        [0, 4],
        [-3, 3],
    ];
    const output = [ 1 / 2, 0 / 4, -3 / 3 ];
    function testDivision(x, y, z) {
        it(x + " / " + y + " = " + z, () => {
            expect(Calculator.div(x, y)).toEqual(z);
        });
    }
    for (let i = 0; i < input.length; i++) {
        testDivision(input[i][0], input[i][1], output[i]);
    }

    it("Division by zero throws an error", () => {
        expect(Calculator.div.bind(null, 0, 0)).toThrowError(/division by zero/gi);
    });
});
