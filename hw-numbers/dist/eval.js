"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrimes = exports.getFibonacci = exports.getEvens = exports.getAll = exports.evaluate = void 0;
var list_1 = require("./list");
var number_set_1 = require("./number_set");
/**
 * Returns the result of evaluating the given expression.
 * @param query the query in question
 * @min smallest number to consider in the answer
 * @max largest number to consider in the answer
 * @returns eval(query), where eval is defined as follows
 *   - eval(even) = even numbers between min and max
 *   - eval(prime) = prime numbers between min and max
 *   - eval(fibonacci) = fibonacci numbers between min and max
 *   - eval(not Q) = (all numbers between min and max) minus eval(Q)
 *   - eval(Q1 and Q2) = eval(Q1) intersect eval(Q2)
 *   - eval(Q1 or Q2) = eval(Q1) union eval(Q2)
 */
function evaluate(query, min, max) {
    // TODO (1f, 3g): update to only use NumberSet interface and factory functions
    if (query === "even") {
        return (0, number_set_1.makeBooleanNumberSet)(getEvens(min, max));
    }
    else if (query === "prime") {
        return (0, number_set_1.makeBooleanNumberSet)(getPrimes(min, max));
    }
    else if (query === "fibonacci") {
        return (0, number_set_1.makeBooleanNumberSet)(getFibonacci(min, max));
    }
    else if (query.kind === "not") {
        // TODO (5e): change to use .complement() from NumberSet instead
        return complement(evaluate(query.arg, min, max), min, max);
    }
    else if (query.kind === "and") {
        // TODO (5e): change to use .complement() from NumberSet instead
        var set = complement(evaluate(query.left, min, max), min, max);
        var notRight = complement(evaluate(query.right, min, max), min, max);
        set.addAll(notRight); // set = not left or right
        return complement(set, min, max); // not (not left or right) = left and right
    }
    else if (query.kind === "or") {
        var set1 = evaluate(query.left, min, max);
        var set2 = evaluate(query.right, min, max);
        set1.addAll(set2);
        return set1;
    }
    else {
        throw new Error('impossible');
    }
}
exports.evaluate = evaluate;
// TODO (5e): remove
// Returns all the numbers between min & max and not in set.
function complement(set, min, max) {
    // TODO (1f, 3g): update to only use NumberSet interface and factory functions
    var result = (0, number_set_1.makeBooleanNumberSet)(getAll(min, max));
    result.removeAll(set);
    return result;
}
// Returns the list of all numbers between min and max
function getAll(min, max) {
    if (min > max) {
        return list_1.nil;
    }
    else {
        return (0, list_1.cons)(min, getAll(min + 1, max));
    }
}
exports.getAll = getAll;
// Returns the list of even numbers between min and max
function getEvens(min, max) {
    if (min > max) {
        return list_1.nil;
    }
    else if (min % 2 === 1) {
        return getEvens(min + 1, max);
    }
    else {
        return (0, list_1.cons)(min, getEvens(min + 2, max));
    }
}
exports.getEvens = getEvens;
// Returns the list of fibonacci numbers between min and max
function getFibonacci(min, max) {
    var fibs = [1, 1];
    // Inv: fibs contains all fibonacci numbers from 1 to fibs[fibs.length-1]
    while (fibs[fibs.length - 1] < max) {
        fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
    }
    // Throw away the ones that aren't between min and max. (If min > 1, then
    // we will have many that should not be returned.)
    return (0, list_1.explode_array)(fibs.slice(1).filter(function (x) { return min <= x && x <= max; }));
}
exports.getFibonacci = getFibonacci;
// Returns the list of prime numbers between min and max
function getPrimes(min, max) {
    var primes = [2];
    var n = 2;
    // Inv: primes contains all the primes <= n
    while (n !== max + 1) {
        var prime = true;
        // Inv: n is not divisible by any of primes[0 .. j-1].
        for (var j = 0; j < primes.length; j++) {
            if (n % primes[j] === 0)
                prime = false;
        }
        if (prime)
            primes.push(n);
        n = n + 1;
    }
    // Throw away the ones that aren't between min and max. (If min > 2, then
    // we will have many that should not be returned.)
    return (0, list_1.explode_array)(primes.filter(function (x) { return min <= x && x <= max; }));
}
exports.getPrimes = getPrimes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ldmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUF3RDtBQUV4RCwyQ0FBK0Q7QUFHL0Q7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEtBQVksRUFBRSxHQUFXLEVBQUUsR0FBVztJQUM3RCw4RUFBOEU7SUFDOUUsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ3BCLE9BQU8sSUFBQSxpQ0FBb0IsRUFBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDakQ7U0FBTSxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxJQUFBLGlDQUFvQixFQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNsRDtTQUFNLElBQUksS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUNoQyxPQUFPLElBQUEsaUNBQW9CLEVBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO1NBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtRQUMvQixnRUFBZ0U7UUFDaEUsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM1RDtTQUFNLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7UUFDL0IsZ0VBQWdFO1FBQ2hFLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUss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