import { Request, Response } from "express";

//export function Dummy(req: Request, res: Response) {
//  const name = first(req.query.name);
//  if (name === undefined) {
//    res.status(500).send('missing "name" parameter');
//  } else {
//    res.json(`Hi, ${name}`);
//  }
//}

const files: Map<string, string> = new Map();

/** Saves the string contents of a file with a given name */
export function saveFile(req: Request, res: Response) {
  const name = first(req.query.name);
  const contents = first(req.body.contents);
  if (name === undefined) {
    res.status(500).send('missing "name" parameter');
  } else if (contents === undefined) {
    res.status(500).send('missing "contents" parameter');
  } else {
    files.set(name, contents);
    res.send({name: name, contents: contents});
  }
}

/** Load the last-saved contents of a file with a given name */
export function loadFile(req: Request, res: Response) {
  const name = first(req.query.name);
  if (name === undefined) {
    res.status(500).send('missing "name" parameter');
  } else {
    const contents = files.get(name);
    res.send({contents: contents});
  }
}

/** Returns a list of all the named save files. */
export function listFiles(req: Request, res: Response) {
  const names = Array.from(files.keys());
  res.send(names);
}




// Helper to return the (first) value of the parameter if any was given.
// (This is mildly annoying because the client can also give mutiple values,
// in which case, express puts them into an array.)
function first(param: any): string|undefined {
  if (Array.isArray(param)) {
    return first(param[0]);
  } else if (typeof param === 'string') {
    return param;
  } else {
    return undefined;
  }
}
