import { explode_array } from "./list";
import { compact_list } from "./list";
import { List } from "./list";
import { NumberSet } from "./number_set";

/**
 * Updates vals1 to not contain any of the numbers in vals2. Both arrays are
 * assumed to be sorted and contain only distinct numbers.
 * @param vals1 the first sorted array of distinct integers
 * @param vals2 the second sorted array of distinct integers
 * @modifies vals1
 * @effects vals1 = without(vals1_0, vals2)
 */
export function removeAll(vals1: number[], vals2: number[]): void {
  let i: number = 0;
  let j: number = 0;
  let k: number = 0;

  // Inv: vals1[0 .. k-1] = without(vals1_0[0 .. i-1], vals2) and
  //      vals1[k .. n-1] = vals1_0[k .. n-1] and
  //      vals2[j-1] < vals1[i] (if these indexes exist)
  while (i !== vals1.length) {
    if ((j === vals2.length) || (vals1[i] < vals2[j])) {
      vals1[k] = vals1[i];
      i = i + 1;
      k = k + 1;
    } else if (vals1[i] > vals2[j]) {
      j = j + 1;
    } else {
      i = i + 1;
      j = j + 1;
    }
  }

  // Inv: vals1[0 .. k-1] = without(vals1_0, vals2)
  while (vals1.length !== k)
    vals1.pop();
}

/**
 * Updates vals1 to contain all of the numbers in vals2. Both arrays are assumed
 * to be sorted and contain only distinct numbers.
 * @param vals1 the first sorted array of distinct integers
 * @param vals2 the second sorted array of distinct integers
 * @modifies vals1
 * @effects vals1 = with(vals1_0, vals2)
 */
export function addAll(vals1: number[], vals2: number[]): void {
  let i: number = 0;
  let j: number = 0;

  const vals3: number[] = [];

  // Inv: vals3 = with(vals1[0 .. i-1], vals2) and
  //      vals2[j-1] < vals1[i] (if these indexes exist)
  while (i !== vals1.length || (j !== vals2.length)) {
    if ((j === vals2.length) || (vals1[i] < vals2[j])) {
      vals3.push(vals1[i]);
      i = i + 1;
    } else if ((i === vals1.length) || vals1[i] > vals2[j]) {
      vals3.push(vals2[j]);
      j = j + 1;
    } else {
      vals3.push(vals1[i]);
      i = i + 1;
      j = j + 1;
    }
  }

  // Now have vals3 = with(vals1_0, vals2)
  if (vals3.length < vals1.length)
    throw new Error('impossible');

  // Inv: vals1[0 .. k-1] = vals3[0 .. k-1]
  for (let k = 0; k < vals1.length; k++)
    vals1[k] = vals3[k];

  // Inv: vals1[0 .. vals1.length-1] = vals3[0 .. vals1.length-1]
  while (vals1.length !== vals3.length)
    vals1.push(vals3[vals1.length]);
}


/**
 * Removes any duplicate elements from the given sorted array of numbers.
 * @param L a sorted array of numbers
 * @modifies L
 * @effects L[0] < L[1] < ... < L[L.length-1] and
 *     contains(L, x) = contains(L_0, x) for any x
 */
export function uniquify(L: number[]): void {
  if (L.length === 0)
    return;

  let i = 1;
  let k = 1;

  // Inv: L[0 .. k-1] = uniquify(L_0[0 .. i-1]) and
  //      L[k .. n-1] = L_0[k .. n-1] and
  //      L[i-1] = L[k-1]
  while (i !== L.length) {
     // TODO (3a): replace this with correct code
    if (L[i] > L[k-1]) {
      L[k] = L[i];
      k = k + 1;
    }
    i = i + 1;
  }
  // TODO (3a): implement the rest
  while (k < L.length) {
    L.pop();
  }
}


// TODO (3b): add class SortedNumberSet
class SortedNumberSet implements NumberSet {
  // AF: obj = sortedSet
  //    comp indicates whether we are storing a finite set as sortedSet
  //    or storing the infinite complement of the set stored in sortedSet
  //    (false means storing finite set, true means storing infinite complement)
  // RI: sortedSet = sort(number[])
  sortedSet : number[] = [];
  comp : boolean = false;

  constructor(set: number[]) {
    this.sortedSet = set.sort(function(a, b){return a-b});
    uniquify(this.sortedSet)
    this.comp = false;
  }

  removeAll(otherSet: NumberSet): void {
    if (this.comp && (otherSet as SortedNumberSet).comp) {
      let R : number[] = (otherSet as SortedNumberSet).sortedSet
      removeAll(R, this.sortedSet);
      this.sortedSet = R.slice(0);
      this.comp = false;
    } else if (!this.comp && (otherSet as SortedNumberSet).comp) {
      let S: number[] = this.sortedSet.slice(0);
      removeAll(S, (otherSet as SortedNumberSet).sortedSet);
      removeAll(this.sortedSet, S);
    } else if (this.comp && !(otherSet as SortedNumberSet).comp) {
      addAll(this.sortedSet, (otherSet as SortedNumberSet).sortedSet);
    } else if (!this.comp && !(otherSet as SortedNumberSet).comp) {
      removeAll(this.sortedSet, (otherSet as SortedNumberSet).sortedSet);
    }
  }

  addAll(otherSet: NumberSet): void {
    if (this.comp && (otherSet as SortedNumberSet).comp) {
      let S: number[] = this.sortedSet.slice(0);
      removeAll(S, (otherSet as SortedNumberSet).sortedSet);
      removeAll(this.sortedSet, S);
    } else if (!this.comp && (otherSet as SortedNumberSet).comp) {
      let R: number[] = (otherSet as SortedNumberSet).sortedSet.slice(0);
      removeAll(R, this.sortedSet);
      this.sortedSet = R.slice(0);
      this.comp = true;
    } else if (this.comp && !(otherSet as SortedNumberSet).comp) {
      removeAll(this.sortedSet, (otherSet as SortedNumberSet).sortedSet);
    } else if (!this.comp && !(otherSet as SortedNumberSet).comp) {
      addAll(this.sortedSet, (otherSet as SortedNumberSet).sortedSet);
    }
  }

  getNumbers(a: number, b: number): List<number> {
    if (this.comp) {
      let c: number[] = []
      // Loops i from a to b (inclusive) and pushes i onto c to ultimately create
      // an array c of integer values from a to b (inclusive)
      for (let i = a; i <= b; i++) {
        c.push(i)
      }
      removeAll(c, this.sortedSet);
      return explode_array<number>(c);
    }
    return explode_array<number>(this.sortedSet);
  }

  complement(): void {
    this.comp = !this.comp;
  }
}

// TODO (3c): add function makeSortedNumberSet
/* Returns an instance of SortedNumberSet */
export function makeSortedNumberSet(vals: List<number>): NumberSet {
  return new SortedNumberSet(compact_list<number>(vals));
}
