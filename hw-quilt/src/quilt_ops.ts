import { Square, Row, rnil, rcons, rconcat, Quilt, qnil, qcons, qconcat } from './quilt';
import { BadArgument } from './patterns';


/** Returns the same square but flipped vertically. */
export function sflip_vert(s: Square): Square {
    if (s.corner === "NW") {
        const square : Square = {shape:s.shape, color:s.color, corner:"SW"};
        return square;
    } else if (s.corner === "NE") {
        const square : Square = {shape:s.shape, color:s.color, corner:"SE"};
        return square;
    } else if (s.corner === "SE") {
        const square : Square = {shape:s.shape, color:s.color, corner:"NE"};
        return square;
    } else {
        const square : Square = {shape:s.shape, color:s.color, corner:"NW"};
        return square;
    } // TODO: replace
}

/** Returns the same row but flipped vertically. */
export function rflip_vert(r: Row): Row {
    if (r === rnil) {
        return r;
    }
    const ro = rflip_vert(r.tl);
    const row = rcons(sflip_vert(r.hd), ro);
    return row;  // TODO: replace
}

/** Returns the same quilt but flipped vertically. */
export function qflip_vert(q: Quilt): Quilt {
    if (q === qnil) {
        return q;
    }

    const qui_ = qcons(rflip_vert(q.hd), qnil);
    const _qui = qflip_vert(q.tl);
    const quilt = qconcat(_qui, qui_);

    return quilt;  // TODO: replace
}


/** Returns the same square but flipped horizontally. */
export function sflip_horz(s: Square): Square {
    if (s.corner === "NW") {
        const square : Square = {shape:s.shape, color:s.color, corner:"NE"};
        return square;
    } else if (s.corner === "NE") {
        const square : Square = {shape:s.shape, color:s.color, corner:"NW"};
        return square;
    } else if (s.corner === "SE") {
        const square : Square = {shape:s.shape, color:s.color, corner:"SW"};
        return square;
    } else {
        const square : Square = {shape:s.shape, color:s.color, corner:"SE"};
        return square;
    }  // TODO: replace
}

/** Returns the same row but flipped horizontally. */
export function rflip_horz(r: Row): Row {
    if (r === rnil) {
        return r;
    }

    const ro_ = rcons(sflip_horz(r.hd), rnil);
    const _ro = rflip_horz(r.tl);
    const row = rconcat(_ro, ro_);

    return row;  // TODO: replace
}

/** Returns the same quilt but flipped horizontally. */
export function qflip_horz(q: Quilt): Quilt {
    if (q === qnil) {
        return q;
    }
    const qui = rflip_horz(q.hd);
    const quilt = qcons(qui,qflip_horz(q.tl));
    return quilt;  // TODO: replace
}


/**
 * Returns the result of sewing together q1 and q2 horizontally, i.e.,
 * concatenating each of their rows. Throws an exception if they are not the
 * same length.
 */
export function sew(q1: Quilt, q2: Quilt): Quilt {
    if (q1 === qnil) {
        if (q2 === qnil) {
            return qnil;
        } else {
            throw new BadArgument("q2", "q1 has none rows but q2 has some");
        }
    } else {
        if (q2 === qnil) {
            throw new BadArgument("q1", "q2 has none rows but q1 has some");
        } else {
            return qcons(rconcat(q1.hd, q2.hd), sew(q1.tl, q2.tl));
        }
    }
}


/**
 * Returns the result of symmetrizing this quilt first vertically, by sewing it
 * together with its horizontally flipped version, and then horizontally, by
 * concatenating its rows with those of its vertically flipped version.
 */
export function symmetrize(q: Quilt): Quilt {
    let r = sew(q, qflip_horz(q));
    return qconcat(r, qflip_vert(r));
}
