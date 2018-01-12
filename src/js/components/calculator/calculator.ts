/*
 * @title Calculator
 * @description Module definition for the Calculator component
 */

/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

export class Calculator {

    /**
     * Prints 'pong' to console
     */
    public static ping(): string {
        return "pong";
    }

    /**
     * Addition
     */
    public static add(x: number, y: number): number {
        return x + y;
    }

    /**
     * Divison
     */
    public static div(x: number, y: number): number {
        if (y === 0) { throw new Error("Division by zero!"); }
        return x / y;
    }

}
