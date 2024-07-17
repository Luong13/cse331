import { Quilt, qnil, Row, rnil, Square, Color } from './quilt';


/** Thrown when a bad argument value is passed in. */
export class BadArgument extends Error {
  constructor(name: string, problem: string) {
    super(`bad argument "${name}": ${problem}`);

    Object.setPrototypeOf(this, BadArgument.prototype); // Ignore this
  }
}


/** Returns a quilt in pattern "A". */
export function PatternA(rows: number = 4, color: Color = "GREEN"): Quilt {
  if (rows === 0) {
    return qnil;
  } else if (rows < 0) {
    throw new BadArgument("Bad Arguments", "rows must be non-negative");
  }
  const square : Square = {shape:"ROUND", color:color, corner:"NW"};
  const row : Row = {kind:"rcons", hd:square, tl:{kind:"rcons", hd:square, tl:rnil}};
  const q = PatternA(rows - 1, color);
  const quilt: Quilt = {kind:"qcons", hd:row, tl:q}
  return quilt;  // TODO: replace
}

/** Returns a quilt in pattern "B". */
export function PatternB(rows: number = 4, color: Color = "GREEN"): Quilt {
  if (rows === 0) {
    return qnil;
  } else if (rows < 0) {
    throw new BadArgument("Bad Arguments", "rows must be non-negative");
  }
  const squareSE : Square = {shape:"STRAIGHT", color:color, corner:"SE"};
  const squareNW : Square = {shape:"STRAIGHT", color:color, corner:"NW"};
  const row : Row = {kind:"rcons", hd:squareSE, tl:{kind:"rcons", hd:squareNW, tl:rnil}};
  const q = PatternB(rows - 1, color)
  const quilt: Quilt = {kind:"qcons", hd:row, tl:q};
  return quilt;  // TODO: replace
}

/** Returns a quilt in pattern "C". */
export function PatternC(rows: number = 4, color: Color = "GREEN"): Quilt {
  if (rows === 0) {
    return qnil;
  } else if (rows < 0 || rows % 2 !== 0) {
    throw new BadArgument("Bad Arguments", "rows must be non-negative and even")
  }
  const squareNE : Square = {shape:"ROUND", color:color, corner:"NE"};
  const squareNW : Square = {shape:"ROUND", color:color, corner:"NW"};
  const squareSE : Square = {shape:"ROUND", color:color, corner:"SE"};
  const squareSW : Square = {shape:"ROUND", color:color, corner:"SW"}
  const rowTop : Row = {kind:"rcons", hd:squareNE, tl:{kind:"rcons", hd:squareNW, tl:rnil}};
  const rowBot : Row = {kind:"rcons", hd:squareSE, tl:{kind:"rcons", hd:squareSW, tl:rnil}};
  const q = PatternC(rows - 2, color);
  const quilt: Quilt = {kind:"qcons", hd:rowTop, tl:{kind:"qcons", hd:rowBot, tl:q}};
  return quilt;  // TODO: replace
}

/** Returns a quilt in pattern "D". */
export function PatternD(rows: number = 4, color: Color = "GREEN"): Quilt {
  if (rows === 0) {
    return qnil;
  } else if (rows < 0 || rows % 2 !== 0) {
    throw new BadArgument("Bad Arguments", "rows must be non-negative and even")
  }
  const squareNE : Square = {shape:"ROUND", color:color, corner:"NE"};
  const squareNW : Square = {shape:"ROUND", color:color, corner:"NW"};
  const squareSE : Square = {shape:"ROUND", color:color, corner:"SE"};
  const squareSW : Square = {shape:"ROUND", color:color, corner:"SW"}
  const rowTop : Row = {kind:"rcons", hd:squareNE, tl:{kind:"rcons", hd:squareNW, tl:rnil}};
  const rowBot : Row = {kind:"rcons", hd:squareSE, tl:{kind:"rcons", hd:squareSW, tl:rnil}};
  const q = PatternD(rows - 2, color);
  const quilt: Quilt = {kind:"qcons", hd:rowBot, tl:{kind:"qcons", hd:rowTop, tl:q}};
  return quilt;  // TODO: replace
}

/** Returns a quilt in pattern "E". */
export function PatternE(rows: number = 4, color: Color = "GREEN"): Quilt {
  if (rows === 0) {
    return qnil;
  } else if (rows < 0) {
    throw new BadArgument("Bad Arguments", "rows must be non-negative");
  }

  const squareSE : Square = {shape:"STRAIGHT", color:color, corner:"SE"};
  const squareNW : Square = {shape:"STRAIGHT", color:color, corner:"NW"};

  if (rows === 1) {
    return {kind:"qcons", hd:{kind:"rcons", hd:squareNW, tl:{kind:"rcons", hd:squareSE, tl:rnil}}, tl:qnil};
  }

  const rowOut : Row = {kind:"rcons", hd:squareNW, tl:{kind:"rcons", hd:squareSE, tl:rnil}};
  const rowIn : Row = {kind:"rcons", hd:squareSE, tl:{kind:"rcons", hd:squareNW, tl:rnil}};

  const q = PatternE(rows - 2, color);

  const quilt: Quilt = {kind:"qcons", hd:rowOut, tl:{kind:"qcons", hd:rowIn, tl:q}};
  return quilt;  // TODO: replace
}
