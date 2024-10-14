import express from "express";

const app = express();
const port = 3000;

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function logger(req, res, next){
  console.log(`Request method ${req.method} | Request url ${req.url}`);  // Logs to the console whenever a request comes in
  next();  // Moves to the next middleware or route
};
