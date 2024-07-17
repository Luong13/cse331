import * as assert from 'assert';
import { cons, explode_array, nil } from './list';
import { node, empty } from './color_node';
import { makeBst, lookup, makeColorTree } from './color_tree';
import { ColorList } from './color_list';

const clist : ColorList = makeColorTree();

describe('color_tree', function() {

    // TODO: Uncomment given example tests and add more test cases

    it('make_bst', function() {
        assert.deepEqual(makeBst(explode_array([
            ['Blue', '#0000FF', true],
            ])), node(['Blue', '#0000FF', true], empty, empty));
        
        // base case, empty
        assert.deepEqual(makeBst(explode_array([])),
            empty);

        // second test for 1 recursive call case
        assert.deepEqual(makeBst(explode_array([
            ['black', '#000000', true],
            ])), node(['black', '#000000', true], empty, empty));
    
        // first test for 2 recursive calls case
        assert.deepEqual(makeBst(explode_array([
            ['Blue', '#0000FF', true],['black', '#000000', true],
            ])), node(['black', '#000000', true], node(['Blue', '#0000FF', true], empty, empty), empty));

        // second test for 2 recursive calls case
        assert.deepEqual(makeBst(explode_array([
            ['Blue', '#0000FF', true],['azure', '#F0FFFF', false],['black', '#000000', true],
            ])), node(['azure', '#F0FFFF', false], node(['Blue', '#0000FF', true], empty, empty), node(['black', '#000000', true], empty, empty)));   
    });

    it('lookup', function() {
        assert.deepEqual(lookup('Yellow', 
            node(['Yellow', '#FFFF00', false], empty, empty)), 
            node(['Yellow', '#FFFF00', false], empty, empty));

        // base case, empty
        assert.deepEqual(lookup('test', 
            node(['Yellow', '#FFFF00', false], empty, empty)), 
            empty);

        // second test for no recursive call case
        assert.deepEqual(lookup('azure', 
            node(['azure', '#F0FFFF', false], node(['Blue', '#0000FF', true], empty, empty), node(['black', '#000000', true], empty, empty))).info, 
            ['azure', '#F0FFFF', false]);

        // test for 1 recursive call case
        assert.deepEqual(lookup('Blue', 
            node(['azure', '#F0FFFF', false], node(['Blue', '#0000FF', true], empty, empty), node(['black', '#000000', true], empty, empty))).info, 
            ['Blue', '#0000FF', true]);

        // first test for many recursive calls
        assert.deepEqual(lookup('black', 
            node(['azure', '#F0FFFF', false], node(['Blue', '#0000FF', true], empty, empty), node(['black', '#000000', true], empty, empty))).info, 
            ['black', '#000000', true]);

        // second test for many recursive calls
        assert.deepEqual(lookup('Blue', 
            node(['azure', '#F0FFFF', false], node(['Blue', '#0000FF', true], empty, empty), node(['black', '#000000', true], empty, empty))).info, 
            ['Blue', '#0000FF', true]);
    });

    // TODO: copy some tests over here
    it('findMatchingNames', function() {
        assert.deepEqual(clist.findMatchingNames("doesnotexist"), nil);
        assert.deepEqual(clist.findMatchingNames("indigo"), cons("indigo", nil));
        assert.deepEqual(clist.findMatchingNames("azure"), cons("azure", nil));
        assert.deepEqual(clist.findMatchingNames("lavender"),
            cons("lavender", cons("lavenderblush", nil)));
        assert.deepEqual(clist.findMatchingNames("pink"),
            cons("deeppink", cons("hotpink", cons("lightpink", cons("pink", nil)))));
      });
    
      it('getColorCss', function() {
        assert.deepEqual(clist.getColorCss("lavender"), ['#E6E6FA', '#101010']);
        assert.deepEqual(clist.getColorCss("indigo"), ['#4B0082', '#F0F0F0']);
      });
});