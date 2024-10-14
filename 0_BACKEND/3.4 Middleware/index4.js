import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

// This is to get the current directory path of the file (__dirname is not directly available in ES modules)
const __dirname = dirname(fileURLToPath(import.meta.url)); //this is to get the file for the next step

const app = express();
const port = 3000;
let bandName = "";

// Use body-parser to parse URL-encoded data from incoming requests
// This line allows your server to understand data from HTML form submissions
// `{ extended: true }` means that nested objects can be encoded (more complex data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(createBandName);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); //this is to make the index.html run on the page ie., when the root URL ("/") is accessed
});

//this one is correct too, its just not using custom middleware
// app.post("/submit", (req, res) => {
//   console.log(req.body);
//   res.send(`Form submitted successfully! <br>
//      ${req.body.street}${req.body.pet}`); // Sends a response back to the browser
// });
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`Form submitted successfully! <br> ${bandName}`); // Sends a response back to the browser
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function createBandName(req, res, next) {
  //Bracket notation allows you to use a string to access a property in an object. It’s more flexible and can handle names that dot notation cannot.
  //example: Accessing Property Dynamically
  bandName = req.body["street"] + req.body["pet"]; 
  console.log(`createBandName worked --> ${bandName}`);
  next();
}
