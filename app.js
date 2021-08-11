const fs = require("fs");

const profileDataArgs = process.argv.slice(2, process.argv.length); // captures the input via node terminal

const [userName, github] = profileDataArgs; // assigns name, github to profileDataArgs[1, 2]

const generatePage = (userName, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${userName}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

const printProfileData = profileDataArr => {

  profileDataArr.forEach(profileItem => console.log(profileItem));

};

printProfileData(profileDataArgs);
fs.writeFile('index.html', generatePage(userName, github), err => {
  if (err) throw err;
  console.log('Portfolio complete, open html to view')
});