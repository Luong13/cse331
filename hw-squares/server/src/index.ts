import express from "express";
import { saveFile, loadFile, listFiles } from './routes';
import bodyParser from 'body-parser';


// Configure and start the HTTP server.
const port = 8088;
const app = express();
app.use(bodyParser.json());
app.post("/api/save", saveFile);
app.get("/api/load", loadFile);
app.get("/api/list", listFiles);
app.listen(port, () => console.log(`Server listening on ${port}`));
