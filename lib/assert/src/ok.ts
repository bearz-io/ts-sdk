// @ts-types="npm:@types/chai"
import { assert } from "chai";

/**
 * Asserts that `value` is truthy.
 * @param value The value to check
 * @param msg The optional message to display if the assertion fails.
 */
export function ok(value: unknown, msg?: string) : void {
    return assert.ok(value, msg);
}