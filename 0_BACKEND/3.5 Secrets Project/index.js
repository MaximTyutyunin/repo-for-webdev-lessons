//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
//import morgan from "morgan";

const TRUE_PASSWORD = "ILoveProgramming";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(__dirname);
});

// Middleware that checks the password
function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === TRUE_PASSWORD) {
    next(); // Move to the next function if password is correct
  } else {
    // Redirect to home if the password is incorrect; this willnot change http://localhost:3000 to http://localhost:3000/check
    // while res.sendFile(__dirname + "/public/index.html"); -would change http://localhost:3000 to http://localhost:3000/check
    // !!!! res.redirect() should be given a URL path, not a file path on your server's file system. !!!
    res.redirect("/");
  }
}

// Applying the middleware to this route
app.post("/check", passwordCheck, (req, res) => {
  res.sendFile(__dirname + "/public/secret.html"); // Only runs if passwordCheck passes
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
