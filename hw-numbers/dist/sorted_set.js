"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniquify = exports.addAll = exports.removeAll = void 0;
/**
 * Updates vals1 to not contain any of the numbers in vals2. Both arrays are
 * assumed to be sorted and contain only distinct numbers.
 * @param vals1 the first sorted array of distinct integers
 * @param vals2 the second sorted array of distinct integers
 * @modifies vals1
 * @effects vals1 = without(vals1_0, vals2)
 */
function removeAll(vals1, vals2) {
    var i = 0;
    var j = 0;
    var k = 0;
    // Inv: vals1[0 .. k-1] = without(vals1_0[0 .. i-1], vals2) and
    //      vals1[k .. n-1] = vals1_0[k .. n-1] and
    //      vals2[j-1] < vals1[i] (if these indexes exist)
    while (i !== vals1.length) {
        if ((j === vals2.length) || (vals1[i] < vals2[j])) {
            vals1[k] = vals1[i];
            i = i + 1;
            k = k + 1;
        }
        else if (vals1[i] > vals2[j]) {
            j = j + 1;
        }
        else {
            i = i + 1;
            j = j + 1;
        }
    }
    // Inv: vals1[0 .. k-1] = without(vals1_0, vals2)
    while (vals1.length !== k)
        vals1.pop();
}
exports.removeAll = removeAll;
/**
 * Updates vals1 to contain all of the numbers in vals2. Both arrays are assumed
 * to be sorted and contain only distinct numbers.
 * @param vals1 the first sorted array of distinct integers
 * @param vals2 the second sorted array of distinct integers
 * @modifies vals1
 * @effects vals1 = with(vals1_0, vals2)
 */
function addAll(vals1, vals2) {
    var i = 0;
    var j = 0;
    var vals3 = [];
    // Inv: vals3 = with(vals1[0 .. i-1], vals2) and
    //      vals2[j-1] < vals1[i] (if these indexes exist)
    while (i !== vals1.length || (j !== vals2.length)) {
        if ((j === vals2.length) || (vals1[i] < vals2[j])) {
            vals3.push(vals1[i]);
            i = i + 1;
        }
        else if ((i === vals1.length) || vals1[i] > vals2[j]) {
            vals3.push(vals2[j]);
            j = j + 1;
        }
        else {
            vals3.push(vals1[i]);
            i = i + 1;
            j = j + 1;
        }
    }
    // Now have vals3 = with(vals1_0, vals2)
    if (vals3.length < vals1.length)
        throw new Error('impossible');
    // Inv: vals1[0 .. k-1] = vals3[0 .. k-1]
    for (var k = 0; k < vals1.length; k++)
        vals1[k] = vals3[k];
    // Inv: vals1[0 .. vals1.length-1] = vals3[0 .. vals1.length-1]
    while (vals1.length !== vals3.length)
        vals1.push(vals3[vals1.length]);
}
exports.addAll = addAll;
/**
 * Removes any duplicate elements from the given sorted array of numbers.
 * @param L a sorted array of numbers
 * @modifies L
 * @effects L[0] < L[1] < ... < L[L.length-1] and
 *     contains(L, x) = contains(L_0, x) for any x
 */
function uniquify(L) {
    if (L.length === 0)
        return;
    var i = 1;
    var k = 1;
    // Inv: L[0 .. k-1] = uniquify(L_0[0 .. i-1]) and
    //      L[k .. n-1] = L_0[k .. n-1] and
    //      L[i-1] = L[k-1]
    while (i !== L.length) {
        i = i + 1; // TODO (3a): replace this with correct code
        k = k + 1; // TODO (3a): replace this with correct code
    }
    // TODO (3a): implement the rest
}
exports.uniquify = uniquify;
// TODO (3b): add class SortedNumberSet
// TODO (3c): add function makeSortedNumberSet
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVkX3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zb3J0ZWRfc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxTQUFnQixTQUFTLENBQUMsS0FBZSxFQUFFLEtBQWU7SUFDeEQsSUFBSSxDQUFDLEdBQVcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7SUFFbEIsK0RBQStEO0lBQy9ELCtDQUErQztJQUMvQyxzREFBc0Q7SUFDdEQsT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUN6QixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDWDthQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNYO2FBQU07WUFDTCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7S0FDRjtJQUVELGlEQUFpRDtJQUNqRCxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUN2QixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQXhCRCw4QkF3QkM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsTUFB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