import express from "express";
const app = express();

/**When the server gets that request, Express automatically creates the req (request) and res (response) objects for you.
req contains info about what the browser is asking for.
res is used by your server to send back the response, like saying, "Here’s the data you wanted!" 

If you had something like http://localhost:3000/about, the /about is a different path in your server, not the root.

+----------------------------------------+
|             Your Express Server        |
|                                        |
|    ┌────────────────────────────┐      |
|    |        / (root path)       |      |
|    |    Response: "hello"       |      |
|    └────────────────────────────┘      |
|                                        |
|    ┌────────────────────────────┐      |
|    |    /about (about page)     |      |
|    |    Response: "About Us"    |      |
|    └────────────────────────────┘      |
|                                        |
|    ┌────────────────────────────┐      |
|    |   /contact (contact page)  |      |
|    |   Response: "Contact Page" |      |
|    └────────────────────────────┘      |
+----------------------------------------+
*/
// app.get( "/", (req,res) => {
//    res.send("hello");
// });

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});

app.get('/about', (req, res) => {
    res.send('About Us');  // Send this text when someone visits "/about"
  });
  
  app.get('/contact', (req, res) => {
    res.send('Contact Page');  // Send this text when someone visits "/contact"
  });
  

  app.get('/', (req, res) => {
    res.send(`
      <h1>Heldfsdfsdflo!</h1>
      <p><a href="/about">Go to About Page</a></p>
    `);
  });
  