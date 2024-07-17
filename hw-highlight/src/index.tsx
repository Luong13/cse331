import React from 'react';
import { createRoot } from 'react-dom/client';
import { parseHighlightLines } from './parser';
import { makeForm, showColors, showHighlights } from './ui';
import { ColorList, makeSimpleColorList } from './color_list';
import { makeColorTree } from './color_tree';


// Parse the query parameters in the URL.
const params = new URLSearchParams(window.location.search);
const word = params.get("word");
const lines = params.get("lines");

const root = createRoot(document.getElementById('main')!);

const clist_ignore: ColorList = makeSimpleColorList();
const clist: ColorList = makeColorTree();

try {
  // If the query included a word to search for, show the colors containing that
  if (word) {
    root.render(<React.StrictMode>{showColors({clist, text: word})}</React.StrictMode>);

  // If the query included a list of lines, then show them highlighted.
  } else if (lines) {
    const highlights = parseHighlightLines(lines);
    root.render(<React.StrictMode>{showHighlights({clist, highlights: highlights})}</React.StrictMode>);

  // Otherwise, show the form asking them for input.
  } else {
    root.render(<React.StrictMode>{makeForm({})}</React.StrictMode>);
  }

} catch (e) {
  if (e instanceof Error) {
    root.render(<React.StrictMode><p>Error: {e.message}</p></React.StrictMode>);
  }
}
