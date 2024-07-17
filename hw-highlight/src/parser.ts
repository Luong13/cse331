import { compact, explode } from './char_list';
import { List, nil, cons, explode_array, split_at } from './list';


/** Text and the name of the highlight (background) color to show it in. */
export type Highlight = {
  color: string,
  text: string
}


// Turns a list of lines into a list of Highlights. Each line should start with
// a color name, followed by a space, followed by the text with that color.
function getHighlights(lines: List<string>): List<Highlight> {
  if (lines === nil) {
    return nil;
  } else {
    const index = lines.hd.indexOf(' ');
    if (index < 0) {
      throw new Error(`line does not start with a color: "${lines.hd}"`);
    }
    const color = lines.hd.substring(0, index).toLowerCase();
    const text = lines.hd.substring(index+1).trim();
    return cons({color: color, text: text}, getHighlights(lines.tl));
  }
}


/**
 * Parses a list of highlights, written one highlight per line.
 * @param text Text to parse into highlights
 * @returns List of highlights described by the text, where each line is an
 *     individual highlight with the color being the first word of the line.
 */
export function parseHighlightLines(text: string): List<Highlight> {
  if (text.trim() === "") {
    return nil;
  } else {
    return getHighlights(explode_array(text.split('\n')));
  }
}


// TODO: Uncomment and complete:

const OPEN = "[".charCodeAt(0);
const MIDDLE = "|".charCodeAt(0);
const CLOSE = "]".charCodeAt(0);

function findHighlights(chars: List<number>): List<Highlight> {
  if (chars === nil) {
    return nil;
  }

  const [P, S] = split_at(chars, OPEN)

  if (P === nil) {
    const [color, the_rest] = split_at(S, MIDDLE);
    const [text, next_parse] = split_at(the_rest, CLOSE)
    if (next_parse !== nil) {
      const h : Highlight = {color: compact((color !== nil) ? color.tl : nil).toLowerCase(), 
                            text: compact((text !== nil) ? text.tl : nil)};
      return cons<Highlight>(h, findHighlights(next_parse.tl));
    } else {
      const h : Highlight = {color: "white", text: compact(S)}
      return cons<Highlight>(h, nil);
    }
  } else {
    const h : Highlight = {color: "white", text: compact(P)};
    const list : List<Highlight> = findHighlights(S);
    if (list !== nil && list.hd.color === "white") {
      return cons<Highlight>({color: "white", text: h.text + list.hd.text}, list.tl)
    }
    return cons<Highlight>(h, findHighlights(S));
  }
}

/**
 * Parses a text string into a list of Highlight's and returns it
 * Text strings can be highlighted in colors if it comes in the form of a '[',
 * followed by a valid color name, followed by a '|', followed by the text
 * to be highlighted in the valid color, and finally followed by a ']'
 * Any other text string is parsed literally and turned into black text on white background
 * @param text The string to be parsed
 * @returns A list of Highlight's
 */
export function parseHighlightText(text: string): List<Highlight> {
  return findHighlights(explode(text));
}