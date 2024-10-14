import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// This is to get the current directory path of the file (__dirname is not directly available in ES modules)
const __dirname = dirname(fileURLToPath(import.meta.url));//this is to get the file for the next step

const app = express();
const port = 3000;


// Use body-parser to parse URL-encoded data from incoming requests
// This line allows your server to understand data from HTML form submissions
// `{ extended: true }` means that nested objects can be encoded (more complex data)
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");//this is to make the index.html run on the page ie., when the root URL ("/") is accessed
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
