import express from "express";
import morgan  from "morgan";
/**Morgan has different styles for logging:

'combined': Logs lots of info, good for production.
'dev': A colorful output, good for development (it shows successful requests in green, errors in red, etc.).
'tiny': Logs just the very basics, like the method and URL. */

const app = express();
const port = 3000;

//  `app.use()` is a function that adds middleware to your Express app.
//app.use() is NOT imported with Morgan or body-parser. It’s a built-in function that comes with Express.
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
