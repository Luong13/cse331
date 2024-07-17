import React from 'react';
import { cipher_decode, cipher_encode, crazy_caps_decode, crazy_caps_encode, pig_latin_decode, pig_latin_encode } from './latin_ops';
import { explode, compact } from './char_list';


/** Returns UI that displays a form asking for encode/decode input. */
export function MakeForm(_: {}): JSX.Element {
    // TODO: Replace this with something fully functional.
    return (
        <form action="/" method="get">
          <input type="text" id="word" name="word"></input>

          <select id="algo" name="algo">
            <option value="cipher">cipher</option>
            <option value="crazy-caps">crazy-caps</option>
            <option value="pig-latin">pig-latin</option>
          </select>

          <input type="radio" id="op1" name="op" value="encode"></input>
          <label htmlFor="op1">encode</label>
          <input type="radio" id="op2" name="op" value="decode"></input>
          <label htmlFor="op2">decode</label>
          <input type="submit" value="Submit"></input>
        </form>);
}


/** Properties expected for the ShowResult UI below. */
export interface ShowResultProps {
    word: string;
    algo: "cipher" | "crazy-caps" | "pig-latin";
    op: "encode" | "decode";
}

/**
 * Returns UI that shows the result of applying the specified operation to the
 * given word.
 */
export function ShowResult(props: ShowResultProps): JSX.Element {
  const list = explode(props.word);
  if (props.algo === "cipher") {
    if (props.op === "decode") {
      const result = compact(cipher_decode(list))
      return <p><code>{result}</code></p>;
    } else if (props.op === "encode") {
      const result = compact(cipher_encode(list))
      return <p><code>{result}</code></p>;
    }
  } else if (props.algo === "crazy-caps") {
    if (props.op === "decode") {
      const result = compact(crazy_caps_decode(list))
      return <p><code>{result}</code></p>;
    } else if (props.op === "encode") {
      const result = compact(crazy_caps_encode(list))
      return <p><code>{result}</code></p>;
    }
  } else if (props.algo === "pig-latin") {
    if (props.op === "decode") {
      const result = compact(pig_latin_decode(list))
      return <p><code>{result}</code></p>;
    } else if (props.op === "encode") {
      const result = compact(pig_latin_encode(list))
      return <p><code>{result}</code></p>;
    }
  }
  return <p><code>"How did we get here?"</code></p>;  // TODO: Replace this
}