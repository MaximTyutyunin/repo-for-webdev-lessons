import express from "express";
const app = express();
const port = 3000;

/**this get function gets activated whenever your server receives a GET request at the root (/) path. It's part of the request-response cycle on the server.
 * listens specifically for GET requests to the root URL (i.e., "http://localhost:PORT/").
    When the server receives a GET request at this path, the callback function you provided is invoked.
    Inside this function, response.send("Hello"); is called, which sends the text "Hello" back to the client (browser, postman, curl, etc.) as the response.
 */
app.get("/", (request, response) => {
  response.send("Hello");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`); // this is a callback for when the server is all set
});
