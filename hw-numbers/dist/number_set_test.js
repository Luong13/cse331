"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __importStar(require("assert"));
var list_1 = require("./list");
var number_set_1 = require("./number_set");
describe('number_set', function () {
    // TODO (1d): change these tests to use makeBooleanNumberSet and call the
    //            corresponding functions of the object (i.e. .getNumbers())
    // TODO (4b): change getNumbers to take additional params 0, 100
    it('makeBooleanNumberSet', function () {
        assert.deepEqual((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([])).getNumbers(), (0, list_1.explode_array)([]));
        assert.deepEqual((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([1])).getNumbers(), (0, list_1.explode_array)([1]));
        assert.deepEqual((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([50])).getNumbers(), (0, list_1.explode_array)([50]));
        assert.deepEqual((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([100])).getNumbers(), (0, list_1.explode_array)([100]));
        assert.deepEqual((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([1, 2, 3])).getNumbers(), (0, list_1.explode_array)([1, 2, 3]));
        assert.deepEqual((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([1, 2, 49, 50, 99, 100])).getNumbers(), (0, list_1.explode_array)([1, 2, 49, 50, 99, 100]));
    });
    it('addAll', function () {
        var set = (0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([2, 4, 6, 8]));
        set.addAll((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([])));
        assert.deepEqual(set.getNumbers(), (0, list_1.explode_array)([2, 4, 6, 8]));
        set.addAll((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([3])));
        assert.deepEqual(set.getNumbers(), (0, list_1.explode_array)([2, 3, 4, 6, 8]));
        set.addAll((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([5, 9])));
        assert.deepEqual(set.getNumbers(), (0, list_1.explode_array)([2, 3, 4, 5, 6, 8, 9]));
        set.addAll((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([1, 100])));
        assert.deepEqual(set.getNumbers(), (0, list_1.explode_array)([1, 2, 3, 4, 5, 6, 8, 9, 100]));
    });
    it('removeAll', function () {
        var set = (0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
        set.removeAll((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([])));
        assert.deepEqual(set.getNumbers(), (0, list_1.explode_array)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
        set.removeAll((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([10])));
        assert.deepEqual(set.getNumbers(), (0, list_1.explode_array)([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        set.removeAll((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([1, 2, 3])));
        assert.deepEqual(set.getNumbers(), (0, list_1.explode_array)([4, 5, 6, 7, 8, 9]));
        set.removeAll((0, number_set_1.makeBooleanNumberSet)((0, list_1.explode_array)([5, 7])));
        assert.deepEqual(set.getNumbers(), (0, list_1.explode_array)([4, 6, 8, 9]));
    });
    // TODO: Ignore for now, uncomment in part 4b. 
    //       - You may have to add some imports upon uncommenting
    // it('complement', function() {
    //   setMaxForTesting(10);
    //   const set0 = makeBooleanNumberSet(explode_array([]));
    //   set0.complement();
    //   assert.deepEqual(set0.getNumbers(1, 100), explode_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    //   const set1 = makeBooleanNumberSet(explode_array([1]));
    //   set1.complement();
    //   assert.deepEqual(set1.getNumbers(1, 100), explode_array([2, 3, 4, 5, 6, 7, 8, 9, 10]));
    //   const set4 = makeBooleanNumberSet(explode_array([2, 4, 6, 8]));
    //   set4.complement();
    //   assert.deepEqual(set4.getNumbers(1, 100), explode_array([1, 3, 5, 7, 9, 10]));
    //   setMaxForTesting(100);
    // });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyX3NldF90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL251bWJlcl9zZXRfdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQWlDO0FBQ2pDLCtCQUF1QztBQUN2QywyQ0FBbUQ7QUFHbkQsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVyQix5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLGdFQUFnRTtJQUVoRSxFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFBLGlDQUFvQixFQUFDLElBQUEsb0JBQWEsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUNqRSxJQUFBLG9CQUFhLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUEsaUNBQW9CLEVBQUMsSUFBQSxvQkFBYSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUNsRSxJQUFBLG9CQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFBLGlDQUFvQixFQUFDLElBQUEsb0JBQWEsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFDbkUsSUFBQSxvQkFBYSxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBQSxpQ0FBb0IsRUFBQyxJQUFBLG9CQUFhLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQ3BFLElBQUEsb0JBQWEsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUEsaUNBQW9CLEVB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