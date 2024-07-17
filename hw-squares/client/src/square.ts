import { List } from './list';


export type Color = "white" | "red" | "orange" | "yellow" | "green" | "blue" | "purple";

export type Square =
    | {readonly kind: "solid", readonly color: Color}
    | {readonly kind: "split", readonly nw: Square, readonly ne: Square,
       readonly sw: Square, readonly se: Square};

export function solid(color: Color): Square {
  return {kind: "solid", color: color};
}

export function split(nw: Square, ne: Square, sw: Square, se: Square): Square {
  return {kind: "split", nw: nw, ne: ne, sw: sw, se: se};
}


/** Returns JSON describing the given Square. */
export function toJson(sq: Square): any {
  if (sq.kind === "solid") {
    return sq.color;
  } else {
    return [toJson(sq.nw), toJson(sq.ne), toJson(sq.sw), toJson(sq.se)];
  }
}

/** Converts a JSON description to the Square it describes. */
export function fromJson(data: any): Square {
  if (typeof data === 'string') {
    switch (data) {
      case "white": case "red": case "orange": case "yellow":
      case "green": case "blue": case "purple":
        return solid(data);

      default:
        throw new Error(`unknown color "${data}"`);
    }
  } else if (Array.isArray(data)) {
    if (data.length === 4) {
      return split(fromJson(data[0]), fromJson(data[1]),
                   fromJson(data[2]), fromJson(data[3]));
    } else {
      throw new Error('split must have 4 parts');
    }
  } else {
    throw new Error(`type ${typeof data} is not a valid square`);
  }
}


/** Indicates one of the four parts of a split. */
export type Dir = "NW" | "NE" | "SE" | "SW";

/** Describes how to get to a square from the root of the tree. */
export type Path = List<Dir>;

export function find(square: Square, path: Path) : Square {
  if (path === "nil") {
    return square;
  }
  if (square.kind === "solid") {
      throw new Error;
  }
  if (path.hd === "NW") {
    return find(square.nw, path.tl);
  } else if (path.hd === "NE") {
    return find(square.ne, path.tl);
  } else if (path.hd === "SW") {
    return find(square.sw, path.tl);
  } else if (path.hd === "SE") {
    return find(square.se, path.tl);
  }

  throw new Error;
}

export function replace(s1: Square, path: Path, s2: Square) : Square {
  if (path === "nil") {
    return s2;
  }
  if (s1.kind === "solid") {
    throw new Error;
  }
  if (path.hd === "NW") {
    return split(replace(s1.nw, path.tl, s2), s1.ne, s1.sw, s1.se);
  } else if (path.hd === "NE") {
    return split(s1.nw, replace(s1.ne, path.tl, s2), s1.sw, s1.se);
  } else if (path.hd === "SW") {
    return split(s1.nw, s1.ne, replace(s1.sw, path.tl, s2), s1.se);
  } else if (path.hd === "SE") {
    return split(s1.nw, s1.ne, s1.sw, replace(s1.se, path.tl, s2));
  }
  throw new Error;
  
}

