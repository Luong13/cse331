import * as assert from 'assert';
import { NW, NE, SW, SE, GREEN, ROUND, Square, rnil, rcons, qnil, qcons } from './quilt';
import { sflip_vert, rflip_vert, qflip_vert, sflip_horz, rflip_horz, qflip_horz, sew, symmetrize } from './quilt_ops';


describe('quilt_ops', function() {

  it('sflip_vert', function() {
    // TODO: implement
    //The following 16 test cases are to test all combinations of
    //shapes, colors, and corners (2 * 2 * 4 = 16 combinations)
    let s : Square = {shape:"ROUND", color:"GREEN", corner:"NW"};
    let t : Square = {shape:"ROUND", color:"GREEN", corner:"SW"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"ROUND", color:"GREEN", corner:"NE"};
    t = {shape:"ROUND", color:"GREEN", corner:"SE"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"ROUND", color:"GREEN", corner:"SE"};
    t = {shape:"ROUND", color:"GREEN", corner:"NE"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"ROUND", color:"GREEN", corner:"SW"};
    t = {shape:"ROUND", color:"GREEN", corner:"NW"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"STRAIGHT", color:"GREEN", corner:"NW"};
    t = {shape:"STRAIGHT", color:"GREEN", corner:"SW"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"STRAIGHT", color:"GREEN", corner:"NE"};
    t = {shape:"STRAIGHT", color:"GREEN", corner:"SE"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"STRAIGHT", color:"GREEN", corner:"SE"};
    t = {shape:"STRAIGHT", color:"GREEN", corner:"NE"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"STRAIGHT", color:"GREEN", corner:"SW"};
    t = {shape:"STRAIGHT", color:"GREEN", corner:"NW"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"ROUND", color:"RED", corner:"NW"};
    t = {shape:"ROUND", color:"RED", corner:"SW"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"ROUND", color:"RED", corner:"NE"};
    t = {shape:"ROUND", color:"RED", corner:"SE"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"ROUND", color:"RED", corner:"SE"};
    t = {shape:"ROUND", color:"RED", corner:"NE"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"ROUND", color:"RED", corner:"SW"};
    t = {shape:"ROUND", color:"RED", corner:"NW"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"STRAIGHT", color:"RED", corner:"NW"};
    t = {shape:"STRAIGHT", color:"RED", corner:"SW"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"STRAIGHT", color:"RED", corner:"NE"};
    t = {shape:"STRAIGHT", color:"RED", corner:"SE"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"STRAIGHT", color:"RED", corner:"SE"};
    t = {shape:"STRAIGHT", color:"RED", corner:"NE"};
    assert.deepEqual(sflip_vert(s), t);

    s = {shape:"STRAIGHT", color:"RED", corner:"SW"};
    t = {shape:"STRAIGHT", color:"RED", corner:"NW"};
    assert.deepEqual(sflip_vert(s), t);
  });

  it('rflip_vert', function() {
    // TODO: implement
    //base case 0 recursive calls test
    assert.deepEqual(rflip_vert(rnil), rnil);

    //1 recursive call test
    let s : Square = {shape:"ROUND", color:"GREEN", corner:"NW"};
    let t : Square = {shape:"ROUND", color:"GREEN", corner:"SW"};
    let r = rcons(s, rnil);
    let r_ = rcons(t, rnil);
    assert.deepEqual(rflip_vert(r), r_);

    //2 recursive calls test
    let rr = rcons(s, r);
    let rr_ = rcons(t, r_);
    assert.deepEqual(rflip_vert(rr), rr_);

    //many recursive calls test
    let rrr = rcons(s, rr);
    let rrr_ = rcons(t, rr_);
    assert.deepEqual(rflip_vert(rrr), rrr_);
  });

  it('qflip_vert', function() {
    // TODO: implement
    //base case 0 recursive calls test
    assert.deepEqual(qflip_vert(qnil), qnil);

    let s : Square = {shape:"STRAIGHT", color:"RED", corner:"NE"};
    let t : Square = {shape:"STRAIGHT", color:"RED", corner:"SE"};
    let u = rcons(s, rcons(s, rnil));
    let v = rcons(t, rcons(t, rnil));

    //1 recursive call test
    let q = qcons(u, qnil);
    let q_= qcons(v, qnil);
    assert.deepEqual(qflip_vert(q), q_);

    //many (2) recursive calls test
    let qq = qcons(u, qcons(u, qnil));
    let qq_= qcons(v, qcons(v, qnil));
    assert.deepEqual(qflip_vert(qq), qq_);
  });

  it('sflip_horz', function() {
    // TODO: implement
    //The following 16 test cases are to test all combinations of
    //shapes, colors, and corners (2 * 2 * 4 = 16 combinations)
    let s : Square = {shape:"ROUND", color:"GREEN", corner:"NW"};
    let t : Square = {shape:"ROUND", color:"GREEN", corner:"NE"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"ROUND", color:"GREEN", corner:"NE"};
    t = {shape:"ROUND", color:"GREEN", corner:"NW"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"ROUND", color:"GREEN", corner:"SE"};
    t = {shape:"ROUND", color:"GREEN", corner:"SW"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"ROUND", color:"GREEN", corner:"SW"};
    t = {shape:"ROUND", color:"GREEN", corner:"SE"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"STRAIGHT", color:"GREEN", corner:"NW"};
    t = {shape:"STRAIGHT", color:"GREEN", corner:"NE"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"STRAIGHT", color:"GREEN", corner:"NE"};
    t = {shape:"STRAIGHT", color:"GREEN", corner:"NW"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"STRAIGHT", color:"GREEN", corner:"SE"};
    t = {shape:"STRAIGHT", color:"GREEN", corner:"SW"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"STRAIGHT", color:"GREEN", corner:"SW"};
    t = {shape:"STRAIGHT", color:"GREEN", corner:"SE"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"ROUND", color:"RED", corner:"NW"};
    t = {shape:"ROUND", color:"RED", corner:"NE"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"ROUND", color:"RED", corner:"NE"};
    t = {shape:"ROUND", color:"RED", corner:"NW"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"ROUND", color:"RED", corner:"SE"};
    t = {shape:"ROUND", color:"RED", corner:"SW"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"ROUND", color:"RED", corner:"SW"};
    t = {shape:"ROUND", color:"RED", corner:"SE"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"STRAIGHT", color:"RED", corner:"NW"};
    t = {shape:"STRAIGHT", color:"RED", corner:"NE"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"STRAIGHT", color:"RED", corner:"NE"};
    t = {shape:"STRAIGHT", color:"RED", corner:"NW"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"STRAIGHT", color:"RED", corner:"SE"};
    t = {shape:"STRAIGHT", color:"RED", corner:"SW"};
    assert.deepEqual(sflip_horz(s), t);

    s = {shape:"STRAIGHT", color:"RED", corner:"SW"};
    t = {shape:"STRAIGHT", color:"RED", corner:"SE"};
    assert.deepEqual(sflip_horz(s), t);
  });

  it('rflip_horz', function() {
    // TODO: implement
    //base case 0 recursive calls test
    assert.deepEqual(rflip_horz(rnil), rnil);

    //1 recursive call test
    let s : Square = {shape:"ROUND", color:"GREEN", corner:"NW"};
    let t : Square = {shape:"ROUND", color:"GREEN", corner:"NE"};
    let r = rcons(s, rnil);
    let r_ = rcons(t, rnil);
    assert.deepEqual(rflip_horz(r), r_);

    //2 recursive calls test
    let rr = rcons(s, r);
    let rr_ = rcons(t, r_);
    assert.deepEqual(rflip_horz(rr), rr_);

    //many recursive calls test
    let rrr = rcons(s, rr);
    let rrr_ = rcons(t, rr_);
    assert.deepEqual(rflip_horz(rrr), rrr_);
  });

  it('qflip_horz', function() {
    // TODO: implement
    //base case 0 recursive calls test
    assert.deepEqual(qflip_horz(qnil), qnil);

    let s : Square = {shape:"STRAIGHT", color:"RED", corner:"SW"};
    let t : Square = {shape:"STRAIGHT", color:"RED", corner:"SE"};
    let u = rcons(s, rcons(s, rnil));
    let v = rcons(t, rcons(t, rnil));

    //1 recursive call test
    let q = qcons(u, qnil);
    let q_= qcons(v, qnil);
    assert.deepEqual(qflip_horz(q), q_);

    //many (2) recursive calls test
    let qq = qcons(u, qcons(u, qnil));
    let qq_= qcons(v, qcons(v, qnil));
    assert.deepEqual(qflip_horz(qq), qq_);
  });

  const nw_sq: Square = {corner: NW, color: GREEN, shape: ROUND};
  const ne_sq: Square = {corner: NE, color: GREEN, shape: ROUND};
  const se_sq: Square = {corner: SE, color: GREEN, shape: ROUND};
  const sw_sq: Square = {corner: SW, color: GREEN, shape: ROUND};

  it('sew', function() {
    const r1 = rcons(nw_sq, rcons(ne_sq, rnil));
    const r2 = rcons(nw_sq, rcons(ne_sq, rcons(nw_sq, rcons(ne_sq, rnil))));
    assert.deepEqual(sew(qnil, qnil), qnil);
    assert.deepEqual(sew(qcons(r1, qnil), qcons(r1, qnil)), qcons(r2, qnil));
    assert.deepEqual(
        sew(qcons(r1, qcons(r1, qnil)), qcons(r1, qcons(r1, qnil))),
        qcons(r2, qcons(r2, qnil)));
  });

  it('symmetrize', function() {
    assert.deepEqual(symmetrize(qnil), qnil);
    assert.deepEqual(symmetrize(qcons(rcons(nw_sq, rnil), qnil)),
        qcons(rcons(nw_sq, rcons(ne_sq, rnil)),
            qcons(rcons(sw_sq, rcons(se_sq, rnil)), qnil)));

    const r1 = rcons(nw_sq, rcons(ne_sq, rnil));
    assert.deepEqual(symmetrize(qcons(r1, qnil)),
        qcons(
            rcons(nw_sq, rcons(ne_sq, rcons(nw_sq, rcons(ne_sq, rnil)))),
            qcons(
                rcons(sw_sq, rcons(se_sq, rcons(sw_sq, rcons(se_sq, rnil)))),
                qnil)));

    const r2 = rcons(sw_sq, rcons(se_sq, rnil));
    assert.deepEqual(symmetrize(qcons(r1, qcons(r2, qnil))),
        qcons(
            rcons(nw_sq, rcons(ne_sq, rcons(nw_sq, rcons(ne_sq, rnil)))),
            qcons(
                rcons(sw_sq, rcons(se_sq, rcons(sw_sq, rcons(se_sq, rnil)))),
                qcons(
                    rcons(nw_sq, rcons(ne_sq, rcons(nw_sq, rcons(ne_sq, rnil)))),
                    qcons(
                        rcons(sw_sq, rcons(se_sq, rcons(sw_sq, rcons(se_sq, rnil)))),
                        qnil)))));
  });

});
