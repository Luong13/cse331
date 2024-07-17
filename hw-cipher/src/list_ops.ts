import { List, nil, cons, concat, len } from './list';


/** Returns the last element in the given list. */
export function last(L: List<number>): number {
    if (L === nil) {
        throw new Error("empty list has no last element");
    } else if (L.tl === nil) {
        return L.hd;
    } else {
        return last(L.tl);
    }
}


/** Returns the prefix consting of the first n elements of L. */
export function prefix<A>(n: number, L: List<A>): List<A> {
  if (n < 0) {
    throw new Error("n cannot be negative");
    
  } else if (n > len<A>(L)){
    throw new Error("n cannot be greater than length of L");
  }

  if (n === 0) {
    return nil;
  }

  if (L === nil) {
    return nil
  }

  const x : List<A> = cons<A>(L.hd, nil);
  const recur : List<A> = prefix(n-1, L.tl);

  const result : List<A> = concat<A>(x, recur);

  return result;  // TODO: replace
}


/** Returns the suffix consting of the elements of L after the first n. */
export function suffix<A>(n: number, L: List<A>): List<A> {
  if (n < 0) {
    throw new Error("n cannot be negative");
    
  } else if (n > len<A>(L)){
    throw new Error("n cannot be greater than length of L");
  }

  if (n === 0 || L === nil) {
    return L;
  }
  return suffix(n-1, L.tl);  // TODO: replace
}