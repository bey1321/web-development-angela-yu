/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qrImage from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        type: 'input',
        name: 'URL',
        message: 'Enter the URL: ',
    }
  ])
  .then((answers) => {
    const qr_png = qrImage.image(answers.URL, {type: 'png'});
    qr_png.pipe(fs.createWriteStream('qr.png')); 
    console.log(`your URL is ${answers.URL}`);

    fs.writeFile('message.txt', answers.URL, (err) => {
        if (err) throw err;
        console.log('The URL has been saved!');
      }); 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


