import * as assert from 'assert';
import { NW, GREEN, ROUND, Square, Row, rnil, rcons, qnil, qcons, STRAIGHT, NE, SE, SW, RED } from './quilt';
import { PatternA, PatternB, PatternC, PatternD, PatternE, BadArgument } from './patterns';


describe('patterns', function() {

  const nw_round_green: Square = {shape: ROUND, color: GREEN, corner: NW};
  const ne_round_green: Square = {shape: ROUND, color: GREEN, corner: NE};
  const se_round_green: Square = {shape: ROUND, color: GREEN, corner: SE};
  const sw_round_green: Square = {shape: ROUND, color: GREEN, corner: SW};
  const nw_straight_green: Square = {shape: STRAIGHT, color: GREEN, corner: NW};
  const ne_straight_green: Square = {shape: STRAIGHT, color: GREEN, corner: NE};
  const se_straight_green: Square = {shape: STRAIGHT, color: GREEN, corner: SE};
  const sw_straight_green: Square = {shape: STRAIGHT, color: GREEN, corner: SW};
  const nw_round_red: Square = {shape: ROUND, color: RED, corner: NW};
  const ne_round_red: Square = {shape: ROUND, color: RED, corner: NE};
  const se_round_red: Square = {shape: ROUND, color: RED, corner: SE};
  const sw_round_red: Square = {shape: ROUND, color: RED, corner: SW};
  const nw_straight_red: Square = {shape: STRAIGHT, color: RED, corner: NW};
  const ne_straight_red: Square = {shape: STRAIGHT, color: RED, corner: NE};
  const se_straight_red: Square = {shape: STRAIGHT, color: RED, corner: SE};
  const sw_straight_red: Square = {shape: STRAIGHT, color: RED, corner: SW};

  it('PatternA', function() {
    const g_row : Row = rcons(nw_round_green, rcons(nw_round_green, rnil));
    const r_row : Row = rcons(nw_round_red, rcons(nw_round_red, rnil));

    //base case no args
    assert.deepEqual(PatternA(),
         qcons(g_row, qcons(g_row, qcons(g_row, qcons(g_row, qnil)))));

    //base case 0 rows
    assert.deepEqual(PatternA(0), qnil);

    //1 green row
    assert.deepEqual(PatternA(1, GREEN),
         qcons(g_row, qnil));

    //1 red row
    assert.deepEqual(PatternA(1, RED),
    qcons(r_row, qnil));

    //2 green rows
    assert.deepEqual(PatternA(2, GREEN),
         qcons(g_row, qcons(g_row, qnil)));

    //2 red rows
    assert.deepEqual(PatternA(2, RED),
    qcons(r_row, qcons(r_row, qnil)));

    // TODO: uncomment this for part (g). This checks that the function throws
    // an exception when the first argument (a function) is called.
    assert.throws(() => PatternA(-1, GREEN), BadArgument);
  });

  it('PatternB', function() {
    const g_row : Row = rcons(se_straight_green, rcons(nw_straight_green, rnil));
    const r_row : Row = rcons(se_straight_red, rcons(nw_straight_red, rnil));

    //base case no args
    assert.deepEqual(PatternB(),
         qcons(g_row, qcons(g_row, qcons(g_row, qcons(g_row, qnil)))));

    //base case 0 rows
    assert.deepEqual(PatternB(0), qnil);

    //1 green row
    assert.deepEqual(PatternB(1, GREEN),
         qcons(g_row, qnil));

    //1 red row
    assert.deepEqual(PatternB(1, RED),
    qcons(r_row, qnil));

    //2 green rows
    assert.deepEqual(PatternB(2, GREEN),
         qcons(g_row, qcons(g_row, qnil)));

    //2 red rows
    assert.deepEqual(PatternB(2, RED),
    qcons(r_row, qcons(r_row, qnil)));

    // TODO: uncomment this for part (g). This checks that the function throws
    // an exception when the first argument (a function) is called.
    assert.throws(() => PatternB(-1, GREEN), BadArgument);
  });

  it('PatternC', function() {
    const g_row0 : Row = rcons(ne_round_green, rcons(nw_round_green, rnil));
    const r_row0 : Row = rcons(ne_round_red, rcons(nw_round_red, rnil));
    const g_row1 : Row = rcons(se_round_green, rcons(sw_round_green, rnil));
    const r_row1 : Row = rcons(se_round_red, rcons(sw_round_red, rnil));

    //base case no args
    assert.deepEqual(PatternC(),
          qcons(g_row0, qcons(g_row1, qcons(g_row0, qcons(g_row1, qnil)))));

    //base case 0 rows
    assert.deepEqual(PatternC(0), qnil);

    //2 green rows
    assert.deepEqual(PatternC(2, GREEN),
          qcons(g_row0, qcons(g_row1, qnil)));

    //2 red rows
    assert.deepEqual(PatternC(2, RED),
          qcons(r_row0, qcons(r_row1, qnil)));

    //4 green rows
    assert.deepEqual(PatternC(4, GREEN),
          qcons(g_row0, qcons(g_row1, qcons(g_row0, qcons(g_row1, qnil)))));

    //4 red rows
    assert.deepEqual(PatternC(4, RED),
          qcons(r_row0, qcons(r_row1, qcons(r_row0, qcons(r_row1, qnil)))));

    // TODO: uncomment this for part (g). This checks that the function throws
    // an exception when the first argument (a function) is called.
    assert.throws(() => PatternC(-1, GREEN), BadArgument);
  });

  it('PatternD', function() {
    const g_row0 : Row = rcons(se_round_green, rcons(sw_round_green, rnil));
    const r_row0 : Row = rcons(se_round_red, rcons(sw_round_red, rnil));
    const g_row1 : Row = rcons(ne_round_green, rcons(nw_round_green, rnil));
    const r_row1 : Row = rcons(ne_round_red, rcons(nw_round_red, rnil));

    //base case no args
    assert.deepEqual(PatternD(),
         qcons(g_row0, qcons(g_row1, qcons(g_row0, qcons(g_row1, qnil)))));

    //base case 0 rows
    assert.deepEqual(PatternD(0), qnil);

    //2 green rows
    assert.deepEqual(PatternD(2, GREEN),
          qcons(g_row0, qcons(g_row1, qnil)));

    //2 red rows
    assert.deepEqual(PatternD(2, RED),
          qcons(r_row0, qcons(r_row1, qnil)));

    //4 green rows
    assert.deepEqual(PatternD(4, GREEN),
          qcons(g_row0, qcons(g_row1, qcons(g_row0, qcons(g_row1, qnil)))));

    //4 red rows
    assert.deepEqual(PatternD(4, RED),
          qcons(r_row0, qcons(r_row1, qcons(r_row0, qcons(r_row1, qnil)))));

    // TODO: uncomment this for part (g). This checks that the function throws
    // an exception when the first argument (a function) is called.
    assert.throws(() => PatternD(-1, GREEN), BadArgument);
  });

  it('PatternE', function() {
    const g_row0 : Row = rcons(nw_straight_green, rcons(se_straight_green, rnil));
    const r_row0 : Row = rcons(nw_straight_red, rcons(se_straight_red, rnil));
    const g_row1 : Row = rcons(se_straight_green, rcons(nw_straight_green, rnil));
    const r_row1 : Row = rcons(se_straight_red, rcons(nw_straight_red, rnil));

    //base case no args
    assert.deepEqual(PatternE(),
         qcons(g_row0, qcons(g_row1, qcons(g_row0, qcons(g_row1, qnil)))));

    //base case 0 rows
    assert.deepEqual(PatternE(0), qnil);

    //1 green row
    assert.deepEqual(PatternE(1, GREEN),
          qcons(g_row0, qnil));

    //1 red row
    assert.deepEqual(PatternE(1, RED),
          qcons(r_row0, qnil));

    //2 green rows
    assert.deepEqual(PatternE(2, GREEN),
          qcons(g_row0, qcons(g_row1, qnil)));

    //2 red rows
    assert.deepEqual(PatternE(2, RED),
          qcons(r_row0, qcons(r_row1, qnil)));

    //3 green rows
    assert.deepEqual(PatternE(3, GREEN),
          qcons(g_row0, qcons(g_row1, qcons(g_row0, qnil))));

    //3 red rows
    assert.deepEqual(PatternE(3, RED),
          qcons(r_row0, qcons(r_row1, qcons(r_row0, qnil))));

    // TODO: uncomment this for part (g). This checks that the function throws
    // an exception when the first argument (a function) is called.
    assert.throws(() => PatternE(-1, GREEN), BadArgument);
  });


});
