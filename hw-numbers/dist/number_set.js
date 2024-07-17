"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBooleanNumberSet = exports.setMaxForTesting = void 0;
var list_1 = require("./list");
/** Maximum number that can be represented in a set. */
var MAX = 100;
// Change the value of max in some tests (to keep the size reasonable)
function setMaxForTesting(max) {
    if (max < 1 || Math.round(max) !== max)
        throw new Error("invalid positive integer ".concat(max));
    MAX = max;
}
exports.setMaxForTesting = setMaxForTesting;
// TODO (1b, 4b): add the class BooleanNumberSet
var BooleanNumberSet = /** @class */ (function () {
    function BooleanNumberSet(set) {
        this.set = [];
        this.set = set;
    }
    BooleanNumberSet.prototype.removeAll = function (otherSet) {
        removeAll(this.set, otherSet.set);
    };
    BooleanNumberSet.prototype.addAll = function (otherSet) {
        addAll(this.set, otherSet.set);
    };
    BooleanNumberSet.prototype.getNumbers = function () {
        return getNumbers(this.set);
    };
    return BooleanNumberSet;
}());
/**
 * Returns the given list of numbers in a number set.
 * @param vals list of numbers to include in the set (and nothing else)
 * @requires every x in vals satisfies 1 <= x <= 100
 * @returns a set S such that S[x-1] === true iff x is in vals
 */
function makeBooleanNumberSet(vals) {
    // Start set out as the empty set.
    var set = new Array(MAX + 1);
    for (var i = 0; i <= MAX; i++)
        set[i] = false;
    // Inv: set indicates the presence of just the numbers we've skipped past
    while (vals !== list_1.nil) {
        if (vals.hd < 1 || MAX < vals.hd)
            throw new Error("unsupported number ".concat(vals.hd, " (must be 1-").concat(MAX, ")"));
        set[vals.hd] = true;
        vals = vals.tl;
    }
    return new BooleanNumberSet(set);
}
exports.makeBooleanNumberSet = makeBooleanNumberSet;
/**
 * Updates set1 to not include any numbers listed in set2.
 * @param set1 set from which to remove elements
 * @param set2 set of elements to remove from set1
 * @modifies set1
 * @result set1[x] = true iff set1_0[x] = true AND set2[x] = false
 */
function removeAll(set1, set2) {
    for (var i = 1; i <= MAX; i++) {
        if (set2[i] === true)
            set1[i] = false;
    }
}
/**
 * Updates set1 to include all the numbers listed in set2.
 * @param set1 set to add elements to
 * @param set2 set of elements to add to set1
 * @modifies set1
 * @result set1[x] = true iff set1_0[x] = true OR set2[x] = true
 */
function addAll(set1, set2) {
    for (var i = 1; i <= MAX; i++) {
        if (set2[i] === true)
            set1[i] = true;
    }
}
/**
 * Returns a list of the numbers present in the given set
 * @param set the set in question
 * @return a list L such that x is in L iff set[x] = tue
 */
function getNumbers(set) {
    var vals = list_1.nil;
    for (var i = MAX; i >= 1; i--) { // make it sorted, just for fun
        if (set[i] === true)
            vals = (0, list_1.cons)(i, vals);
    }
    return vals;
}
// TODO: Ignore this for now. Uncomment and use in part 4b
// /**
//  * Updates set to have the opposite set of numbers: all the numbers (between 1
//  * and 100) that were not in the set passed in.
//  * @param set Set to complement
//  * @modifies set
//  * @effects set[x] = not set_0[x]
//  */
// export function complement(set: boolean[]): void {
//   for (let i = 1; i <= MAX; i++) {
//     set[i] = !set[i];
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyX3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9udW1iZXJfc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUF5QztBQUV6Qyx1REFBdUQ7QUFDdkQsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDO0FBRXRCLHNFQUFzRTtBQUN0RSxTQUFnQixnQkFBZ0IsQ0FBQyxHQUFXO0lBQzFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUc7UUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBNEIsR0FBRyxDQUFFLENBQUMsQ0FBQztJQUNyRCxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ1osQ0FBQztBQUpELDRDQUlDO0FBYUQsZ0RBQWdEO0FBQ2hEO0lBR0UsMEJBQVksR0FBYztRQUYxQixRQUFHLEdBQWUsRUFBRSxDQUFDO1FBR25CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsUUFBbUI7UUFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUcsUUFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLFFBQW1CO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFHLFFBQTZCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDRSxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUMsSUFBa0I7SUFDckQsa0NBQWtDO0lBQ2xDLElBQU0sR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRTtRQUMzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBRWpCLHlFQUF5RTtJQUN6RSxPQUFPLElBQUksS0FBSyxVQUFHLEVBQUU7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBc0IsSUFBSSxDQUFDLEVBQUUseUJBQWUsR0FBRyxNQUFHLENBQUMsQ0FBQztRQUV0RSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjtJQUVELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBaEJELG9EQWdCQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsU0FBUyxDQUFDLElBQWUsRUFBRSxJQUFlO0lBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDN0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSTtZQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQ25CO0FBQ0gsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsTUFBTSxDQUFDLElBQWUsRUFBRSxJQUFlO0lBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDN0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSTtZQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLFVBQVUsQ0FBQyxHQUFjO0lBQ2hDLElBQUksSUFBSSxHQUFpQixVQUFHLENBQUM7SUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFHLCtCQUErQjtRQUMvRCxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJO1lBQ2pCLElBQUksR0FBRyxJQUFBLFdBQUksRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDeEI7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCwwREFBMEQ7QUFDMUQsTUFBTTtBQUNOLGlGQUFpRjtBQUNqRixrREFBa0Q7QUFDbEQsa0NBQWtDO0FBQ2xDLG1CQUFtQjtBQUNuQixvQ0FBb0M7QUFDcEMsTUFBTTtBQUNOLHFEQUFxRDtBQUNyRCxxQ0FBcUM7QUFDckMsd0JBQXdCO0FBQ3hCLE1BQU07QUFDTixJQUFJIn0=