import { List, len, nil, split } from './list';
import { ColorInfo, COLORS } from './colors';
import { ColorNode, node, empty } from './color_node';
import { ColorList, findMatchingNamesIn } from './color_list';


// TODO: Uncomment and complete

/**
* Returns an instance of ColorNode created based on the List<ColorInfo> passed in
* @param L The List<ColorInfo> which the BST will be created from
* @returns an instance of ColorNode with info based on the param L
*/
export function makeBst(L: List<ColorInfo>): ColorNode {
    if (L === nil) {
        return empty;
    }
    const m = Math.floor(len(L) / 2);
    const [P, S]  = split(m, L);

    if (S !== nil) {
        return node(S.hd, makeBst(P), makeBst(S.tl));
    } else {
        return node(["","",false], makeBst(P), empty);
    }
}

/**
* Returns the ColorNode in a given BST that contains a given string,
* or returns empty if no such ColorNode exists
* @param y The string being searched for
* @param root The BST that is being searched within
* @returns The ColorNode, or empty if DNE, within BST root that contains the string y being searched for
*/
export function lookup(y: string, root: ColorNode): ColorNode {
    if (root === empty) {
        return empty;
    }
    
    const x : string = root.info[0];

    if (x === y) {
        return root;
    } else if (x < y) {
        return lookup(y, root.after);
    } else {
        return lookup(y, root.before);
    }
}

// TODO: add interfaces, classes, functions here

/** Returns an instance of ColorTree */
export function makeColorTree() : ColorTree {
    return new ColorTree(COLORS);
}

/** Implementation of the ColorList interface */
class ColorTree implements ColorList {
    // AF: obj = colors_tree
    // RI: colors_list = values(colors_tree)
    readonly colors_list;
    readonly colors_tree;

    constructor(colors_list: List<ColorInfo>) {
        this.colors_list = colors_list;
        this.colors_tree = makeBst(colors_list);
    }

    findMatchingNames(text: string): List<string> {
        return findMatchingNamesIn(text, this.colors_list);
    }

    getColorCss(name: string): readonly [string, string] {
        return getColorCssIn(name, this.colors_tree);
    }
}

function getColorCssIn(name: string, colors_tree: ColorNode): readonly [string, string] {

    if (colors_tree === empty) {
        throw new Error(`no color called "${name}"`);
    }

    const n = lookup(name, colors_tree);
    
    if (n !== empty) {
        return [n.info[1], n.info[2] ? '#F0F0F0' : '#101010'];
    } else {
        return ["",""];
    }
}
