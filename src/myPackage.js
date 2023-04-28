// @@ts-check

/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */

export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */

export function exit(code) {
  return code + 1;
}

/**
 *
 * @param {object} ex1
 * @param {number} ex1.num
 * @param {string} ex1.str
 * @param {boolean} ex2
 * @returns {object}
 */
export function example(ex1, ex2) {
  return { ex1, ex2 };
}
