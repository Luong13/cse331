
import * as assert from 'assert';
import { nil, cons } from './list';
import { ColorList, makeSimpleColorList } from './color_list';

const clist: ColorList = makeSimpleColorList();

describe('color_list', function() {

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