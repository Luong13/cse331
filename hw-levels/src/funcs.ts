/** Calculates (incorrectly) the value (n-1)^2. */
export function quadratic3(n: number): number {
  return n - 1;  // TODO: replace this
}

/** Calculates (incorrectly) the value |x|.  */
export function abs_value3(x: number): number {
  if (x < -1) {
    return -x;
  } else {
    return x;
  } // TODO: replace this
}

/** Calculates (incorrectly) the value |x|.  */
export function abs_value4(x: number): number|undefined {
  if (x > 0) {
    return x;
  } else if (x < 0) {
    return -x;
  }  // TODO: replace this
}

/**
 * Returns the number of pairs we can get from n items, where n is a
 * non-negative integer.
 */
export function count_pairs(n: number): number {
  if (n > 0 && n % 2 === 0) {
    return count_pairs(n - 2) + 1;// TODO: replace this
  } else if (n > 0 && n % 2 === 1) {
    return count_pairs(n % 2 - 1);
  } else {
    return n;
  }
}

/**
 * Returns the number of pairs we can get from n items, where n is a
 * non-negative integer.
 */
export function count_pairs2(n: number): number {
  if (n > 0 && n % 2 === 0) {
    return count_pairs(n - 2) + 1;// TODO: replace this
  } else if (n > 0 && n % 2 === 1) {
    return count_pairs(n - 1) % 2;
  } else {
    return n;
  }
}