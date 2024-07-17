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
var sorted_set_1 = require("./sorted_set");
describe('sorted_set', function () {
    it('removeAll', function () {
        var set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        (0, sorted_set_1.removeAll)(set, []);
        assert.deepEqual(set, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        (0, sorted_set_1.removeAll)(set, [10]);
        assert.deepEqual(set, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        (0, sorted_set_1.removeAll)(set, [1, 2, 3]);
        assert.deepEqual(set, [4, 5, 6, 7, 8, 9]);
        (0, sorted_set_1.removeAll)(set, [5, 7]);
        assert.deepEqual(set, [4, 6, 8, 9]);
    });
    it('addAll', function () {
        var set = [1, 3, 5, 8];
        (0, sorted_set_1.addAll)(set, []);
        assert.deepEqual(set, [1, 3, 5, 8]);
        (0, sorted_set_1.addAll)(set, [10]);
        assert.deepEqual(set, [1, 3, 5, 8, 10]);
        (0, sorted_set_1.addAll)(set, [1, 2, 3]);
        assert.deepEqual(set, [1, 2, 3, 5, 8, 10]);
        (0, sorted_set_1.addAll)(set, [5, 7]);
        assert.deepEqual(set, [1, 2, 3, 5, 7, 8, 10]);
    });
    it('uniquify', function () {
        var set1 = [];
        (0, sorted_set_1.uniquify)(set1);
        assert.deepEqual(set1, []);
        var set2 = [1];
        (0, sorted_set_1.uniquify)(set2);
        assert.deepEqual(set2, [1]);
        var set3 = [1, 2];
        (0, sorted_set_1.uniquify)(set3);
        assert.deepEqual(set3, [1, 2]);
        var set4 = [1, 1];
        (0, sorted_set_1.uniquify)(set4);
        assert.deepEqual(set4, [1]);
        var set5 = [1, 1, 1];
        (0, sorted_set_1.uniquify)(set5);
        assert.deepEqual(set5, [1]);
        var set6 = [1, 2, 2];
        (0, sorted_set_1.uniquify)(set6);
        assert.deepEqual(set6, [1, 2]);
        var set7 = [1, 2, 3];
        (0, sorted_set_1.uniquify)(set7);
        assert.deepEqual(set7, [1, 2, 3]);
        var set8 = [1, 1, 2, 4, 4, 4, 5, 5, 7, 7, 8, 9, 10, 10, 10];
        (0, sorted_set_1.uniquify)(set8);
        assert.deepEqual(set8, [1, 2, 4, 5, 7, 8, 9, 10]);
    });
    // ----- NOTE: you may have to add imports to get these test to pass
    // ----- TODO (3d): - uncomment the tests for makeSortedNumberSet
    // it('makeSortedNumberSet', function() {
    //   // TODO (4e): pass (1, 10) as the arguments to all calls to getNumbers
    //   assert.deepEqual(makeSortedNumberSet(explode_array([])).getNumbers(),
    //       explode_array([]));
    //   assert.deepEqual(makeSortedNumberSet(explode_array([1])).getNumbers(),
    //       explode_array([1]));
    //   assert.deepEqual(makeSortedNumberSet(explode_array([1, 2, 3])).getNumbers(),
    //       explode_array([1, 2, 3]));
    //   assert.deepEqual(makeSortedNumberSet(explode_array([3, 2, 1])).getNumbers(),
    //       explode_array([1, 2, 3]));
    //   assert.deepEqual(makeSortedNumberSet(explode_array([1, 1, 2, 2, 3, 3])).getNumbers(),
    //       explode_array([1, 2, 3]));
    //   assert.deepEqual(
    //       makeSortedNumberSet(explode_array([1, 2, 2, 49, 50, 50, 99, 100])).getNumbers(),
    //       explode_array([1, 2, 49, 50, 99, 100]));
    // });
    // ----- TODO (4f): - uncomment the tests for complement
    // it('complement', function() {
    //   const set0 = makeSortedNumberSet(explode_array([]));
    //   set0.complement();
    //   assert.deepEqual(set0.getNumbers(1, 10), explode_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    //   const set1 = makeSortedNumberSet(explode_array([1]));
    //   set1.complement();
    //   assert.deepEqual(set1.getNumbers(1, 10), explode_array([2, 3, 4, 5, 6, 7, 8, 9, 10]));
    //   const set4 = makeSortedNumberSet(explode_array([2, 4, 6, 8]));
    //   set4.complement();
    //   assert.deepEqual(set4.getNumbers(1, 10), explode_array([1, 3, 5, 7, 9, 10]));
    // });
    // ----- TODO (5b): - uncomment the tests for removeAll - infinite sets
    // it('removeAll - infinite', function() {
    //   const set = makeSortedNumberSet(explode_array([3, 4, 5, 6]));
    //   const set1 = makeSortedNumberSet(explode_array([1, 2, 3, 4]));
    //   set1.removeAll(set);
    //   assert.deepEqual(set1.getNumbers(1, 10), explode_array([1, 2]));
    //   const set2 = makeSortedNumberSet(explode_array([1, 2, 3, 4]));
    //   set2.complement();
    //   set2.removeAll(set);
    //   assert.deepEqual(set2.getNumbers(1, 10), explode_array([7, 8, 9, 10]));
    //   set.complement();
    //   const set3 = makeSortedNumberSet(explode_array([1, 2, 3, 4]));
    //   set3.removeAll(set);
    //   assert.deepEqual(set3.getNumbers(1, 10), explode_array([3, 4]));
    //   const set4 = makeSortedNumberSet(explode_array([1, 2, 3, 4]));
    //   set4.complement();
    //   set4.removeAll(set);
    //   assert.deepEqual(set4.getNumbers(1, 10), explode_array([5, 6]));
    // });
    // ----- TODO (5d): - uncomment the tests for removeAll - infinite sets
    // it('addAll - infinite', function() {
    //   const set = makeSortedNumberSet(explode_array([3, 4, 5, 6]));
    //   const set1 = makeSortedNumberSet(explode_array([1, 2, 3, 4]));
    //   set1.addAll(set);
    //   assert.deepEqual(set1.getNumbers(1, 10), explode_array([1, 2, 3, 4, 5, 6]));
    //   const set2 = makeSortedNumberSet(explode_array([1, 2, 3, 4]));
    //   set2.complement();
    //   set2.addAll(set);
    //   assert.deepEqual(set2.getNumbers(1, 10), explode_array([3, 4, 5, 6, 7, 8, 9, 10]));
    //   set.complement();
    //   const set3 = makeSortedNumberSet(explode_array([1, 2, 3, 4]));
    //   set3.addAll(set);
    //   assert.deepEqual(set3.getNumbers(1, 10), explode_array([1, 2, 3, 4, 7, 8, 9, 10]));
    //   const set4 = makeSortedNumberSet(explode_array([1, 2, 3, 4]));
    //   set4.complement();
    //   set4.addAll(set);
    //   assert.deepEqual(set4.getNumbers(1, 10), explode_array([1, 2, 5, 6, 7, 8, 9, 10]));
    // });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVkX3NldF90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NvcnRlZF9zZXRfdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQWlDO0FBQ2pDLDJDQUEyRDtBQUUzRCxRQUFRLENBQUMsWUFBWSxFQUFFO0lBRXJCLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDZCxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUEsc0JBQVMsRUFBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXZELElBQUEsc0JBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5ELElBQUEsc0JBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUMsSUFBQSxzQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDWCxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUEsbUJBQU0sRUFBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBDLElBQUEsbUJBQU0sRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEMsSUFBQSxtQkFBTSxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzQyxJQUFBLG1CQUFNLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFVBQVUsRUFBRTtRQUNiLElBQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUMxQixJQUFBLHFCQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzQixJQUFNLElBQUksR0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUEscUJBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFNLElBQUksR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFBLHFCQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9CLElBQU0sSUFBSSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUEscUJBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFNLElBQUksR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBQSxxQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLElBQU0sSUFBSSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENB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