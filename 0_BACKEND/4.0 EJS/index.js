import express from "express";

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  // Call the checkDay function to get the array
  const dayInfo = checkDay(); // Returns an array like ["a weekday", "It's time to work hard!"]

  // Use res.render to pass the array as part of the object
  res.render("index", {
    dayType: dayInfo[0], // First element of the array (day type)
    advice: dayInfo[1], // Second element of the array (advice)
  });
});

function checkDay() {
  const today = new Date();
  const day = today.getDay(); // Get the day of the week as a number (0-6)

  // Return an array with type and advice
  if (day === 0 || day === 6) {
    return ["the weekend", "It's time to have some fun!"];
  } else {
    return ["a weekday", "It's time to work hard!"];
  }
}

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
