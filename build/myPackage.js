"use strict";
// @@ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = exports.exit = exports.init = void 0;
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
function init(config) {
    return true;
}
exports.init = init;
/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */
function exit(code) {
    return code + 1;
}
exports.exit = exit;
/**
 *
 * @param {object} ex1
 * @param {number} ex1.num
 * @param {string} ex1.str
 * @param {boolean} ex2
 * @returns {object}
 */
function example(ex1, ex2) {
    return { ex1, ex2 };
}
exports.example = example;
