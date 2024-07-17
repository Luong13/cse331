import * as assert from 'assert';
import * as React from 'react';
import { ShowResult } from './ui';


describe('ui', function() {

  it('ShowResult', function() {
    //Exhaustively test all possible function calls
    assert.deepEqual(
      ShowResult({word: "ef", algo: "cipher", op: "encode"}),
      <p><code>iv</code></p>);
    assert.deepEqual(
      ShowResult({word: "ef", algo: "cipher", op: "decode"}),
      <p><code>aw</code></p>);
    assert.deepEqual(
      ShowResult({word: "crazee", algo: "crazy-caps", op: "encode"}),
      <p><code>CrAzEe</code></p>);
    assert.deepEqual(
      ShowResult({word: "CrAzEe", algo: "crazy-caps", op: "decode"}),
      <p><code>crazee</code></p>);
    assert.deepEqual(
      ShowResult({word: "stray", algo: "pig-latin", op: "encode"}),
      <p><code>aystray</code></p>);
    assert.deepEqual(
      ShowResult({word: "ilesmay", algo: "pig-latin", op: "decode"}),
      <p><code>smile</code></p>);
    /*
    assert.deepEqual(
      ShowResult({word: "", algo: "", op: ""}),
      <p><code></code></p>);
    */
    
  });

});