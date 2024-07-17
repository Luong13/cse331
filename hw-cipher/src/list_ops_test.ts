import * as assert from 'assert';
import { explode } from './char_list';
import { last, prefix, suffix } from './list_ops';
import { nil } from './list';


describe('list_ops', function() {

  it('last', function() {
    assert.throws(() => last(nil), Error);

    assert.deepEqual(last(explode("a")), "a".charCodeAt(0));
    assert.deepEqual(last(explode("_")), "_".charCodeAt(0));

    assert.deepEqual(last(explode("stray")), "y".charCodeAt(0));
    assert.deepEqual(last(explode("shrug")), "g".charCodeAt(0));
    assert.deepEqual(last(explode("hub")), "b".charCodeAt(0));
    assert.deepEqual(last(explode("hm")), "m".charCodeAt(0));
  });

  it('prefix', function() {
    // TODO: add tests
    const lol = explode("abcdefghijkl");

    //base case, nil
    assert.deepEqual(prefix(0, nil), nil)

    //base case, n = 0 and non-nil list
    assert.deepEqual(prefix(0, lol), explode(""))

    //2 tests for 1 recursive call case
    assert.deepEqual(prefix(1, lol), explode("a"))
    assert.deepEqual(prefix(1, explode("a")), explode("a"))

    //a few tests for many recursive calls case
    assert.deepEqual(prefix(3, lol), explode("abc"))
    assert.deepEqual(prefix(4, lol), explode("abcd"))
    assert.deepEqual(prefix(5, explode("abcde")), explode("abcde"))
    assert.deepEqual(prefix(6, lol), explode("abcdef"))
  });

  it('suffix', function() {
    // TODO: add tests
    const lol = explode("abcdefghijkl");

    //base case, nil
    assert.deepEqual(suffix(0, nil), nil)

    //base case, n = 0 and non-nil list
    assert.deepEqual(suffix(0, lol), explode("abcdefghijkl"))

    //2 tests for 1 recursive call case
    assert.deepEqual(suffix(1, lol), explode("bcdefghijkl"))
    assert.deepEqual(suffix(1, explode("jk")), explode("k"))

    //a few tests for many recursive calls case
    assert.deepEqual(suffix(3, lol), explode("defghijkl"))
    assert.deepEqual(suffix(4, lol), explode("efghijkl"))
    assert.deepEqual(suffix(5, explode("abcdefghijkl")), explode("fghijkl"))
    assert.deepEqual(suffix(6, lol), explode("ghijkl"))
  });

});
