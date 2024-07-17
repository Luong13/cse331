import { List, nil, cons, rev } from './list';
import { Color } from './color';

/**
 * Returns the list of colors shown in the each of the odd rows (first,
 * third, fifth, etc.) by a warp-faced weave with the given warp colors.
 * @param list of all the (warp) colors in the weave
 * @return take(colors), i.e., every other color starting from the first
 */
export function weaveWarpFacedOdds(colors: List<Color>): List<Color> {
  let rest: List<Color> = colors;
  let done: List<Color> = nil;

  // Inv: take(colors) = cons(rev(done), take(rest.tl.tl))
  while (rest !== nil && rest.tl !== nil) {
    // TODO: implement this
    let color = rest.hd;
    done = cons(color, done)
    rest = rest.tl.tl;
  }

  if (rest === nil) {
    // We have take(colors) = concat(rev(done), take(nil))   since rest = nil
    //                      = concat(rev(done), nil)         def of take
    //                      = rev(done)                      by Fact C
    return rev(done);
  } else {
    // TODO: implement this
    return rev(cons(rest.hd, done));
  }
}

/**
 * Returns the list of colors shown in the each of the even rows (second,
 * fourth, etc.) by a warp-faced weave with the given warp colors.
 * @param list of all the (warp) colors in the weave
 * @return skip(colors), i.e., every other color starting from the second
 */
export function weaveWarpFacedEvens(colors: List<Color>): List<Color> {
  let rest: List<Color> = colors;
  let done: List<Color> = nil;

  // Inv: skip(colors) = cons(rev(done), skip(rest.tl.tl))
  while (rest !== nil && rest.tl !== nil) {
    // TODO: implement this
    rest = rest.tl;
    let color = rest.hd;
    done = cons(color, done)
    rest = rest.tl;
  }

  if (rest === nil) {
    return rev(done);
  } else {
    // TODO: implement this
    return rev(done);
  }
}

/**
 * Returns the list of colors shown in the each of the odd rows (first, third,
 * fifth, etc.) by a balanced weave with the given warp and weft colors.
 * @param list of all the (warp) colors in the weave
 * @para c (weft) color to replace with
 * @return leave(colors, c)
 */
export function weaveBalancedOdds(colors: List<Color>, c: Color): List<Color> {
  let rest: List<Color> = colors;
  let done: List<Color> = nil;

  // Inv: leave(colors, c) = cons(rev(done), leave(rest.tl.tl))
  while (rest !== nil && rest.tl !== nil) {
    // TODO: implement this
    let color = rest.hd
    done = cons(color, done)
    done = cons(c, done)
    rest = rest.tl.tl;
  }

  if (rest === nil) {
    return rev(done);
  } else {
    // TODO: implement this
    return rev(cons(rest.hd, done));
  }
}

/**
 * Returns the list of colors shown in the each of the even rows (second,
 * fourth, etc.) by a balanced weave with the given warp and weft colors.
 * @param list of all the (warp) colors in the weave
 * @para c (weft) color to replace with
 * @return replace(colors, c)
 */
export function weaveBalancedEvens(colors: List<Color>, c: Color): List<Color> {
  let rest: List<Color> = colors;
  let done: List<Color> = nil;

  // Inv: replace(colors, c) = cons(rev(done), replace(rest.tl.tl))
  while (rest !== nil && rest.tl !== nil) {
    // TODO: implement this
    done = cons(c, done)
    rest = rest.tl
    done = cons(rest.hd, done)
    rest = rest.tl
  }

  if (rest === nil) {
    return rev(done);
  } else {
    // TODO: implement this
    return rev(cons(c, done));
  }
}

/**
 * Returns the given number of rows of a weave with the given colors
 * @param rows the (natural) number of rows in the weave
 * @param colors the weft colors in each row
 * @returns list of the given length where the odd values are the colors of
 *      weaveWarpFacedOdds and the even values are the colors of
 *      weaveWarpFacedEvens.
 * @returns the function defined recursively (on rows) by
 *   - weaveWarpFaced(0, colors) = nil
 *   - weaveWarpFaced(1, colors) = cons(weaveWarpFacedEvens(colors), nil)
 *   - weaveWarpFaced(n+2, colors) =
 *         cons(weaveWarpFacedEvens(colors),
 *             cons(weaveWarpFacedRows(colors), weaveWarpFaced(n, colors)))
 */
export function weaveWarpFaced(rows: number, colors: List<Color>): List<List<Color>> {
  // TODO: implement this with a while loop instead
  // Be sure to document your loop invariant with an Inv comment above the loop
  // Inv: weave(n+2, colors) = cons(skip(colors), cons(take(colors, weave(n, colors)))
  let n = rows;
  let done : List<List<Color>> = nil;
  while (n >= 2) {
    done = cons(weaveWarpFacedEvens(colors),
      cons(weaveWarpFacedOdds(colors), done));
    n = n - 2;
  }
  if (n === 1) {
    return cons(weaveWarpFacedEvens(colors), rev(done))
  }
  return done;
}

/**
 * Returns the given number of rows of a balanced weave with the given colors
 * @param rows the (natural) number of rows in the weave
 * @param colors the warp colors in each row
 * @param c the weft color
 * @returns the function defined recursively (on rows) by
 *   - weaveBalanced(0, colors, c) = nil
 *   - weaveBalanced(1, colors, c) = cons(weaveBalancedEvens(colors, c), nil)
 *   - weaveBalanced(n+2, colors, c) =
 *         cons(weaveBalancedEvens(colors, c),
 *             cons(weaveBalancedRows(colors, c), weaveBalanced(n, colors, c)))
 */
export function weaveBalanced(rows: number, colors: List<Color>, c: Color): List<List<Color>> {
  // TODO: implement this with a while loop instead
  // Be sure to document your loop invariant with an Inv comment above the loop
  // Inv: weaveBal(n+2, colors) = cons(replace(colors), cons(leave(colors, weaveBal(n, colors)))
  let n = rows;
  let done : List<List<Color>> = nil;
  while (n >= 2) {
    done = cons(weaveBalancedEvens(colors, c),
      cons(weaveBalancedOdds(colors, c), done));
    n = n - 2;
  }
  if (n === 1) {
    return cons(weaveBalancedEvens(colors, c), rev(done))
  }
  return done;
}
