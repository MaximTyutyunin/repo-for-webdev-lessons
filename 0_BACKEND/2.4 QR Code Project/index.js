/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import uInput from "inquirer";
import qrImage from "qr-image";
import fs from "fs";

uInput
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter the URL to generate a QR code:", // the position of the line doesnt matter
    },
  ])
  .then((answers) => {
    /**qrImage.image(url):
        This function generates the QR code in a stream of data.
        This data is essentially in a text form (or binary form) that represents the QR code.

        Saving it as a PNG:
        When you use .pipe(fs.createWriteStream("myQR.png")), it writes that stream of data into a file named myQR.png.
        Since you’re saving it with a .png extension, it’s interpreted as an image file. The QR code 
        data is already formatted correctly by the qrImage.image() function, so it automatically becomes a PNG image when saved. */
    const url = answers.url;

    var qr_png = qrImage.image(url);
    console.log(qr_png);
    qr_png.pipe(fs.createWriteStream("myQR.png"));
    console.log("QR code saved as qr_code.png");

    fs.writeFile("user_url.txt", url, (err) => {
      if (err) throw err;
      console.log("The URL has been saved to user_url.txt");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
