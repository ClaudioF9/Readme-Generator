console.log("hello");
const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');

// // array of questions for user
const promptUser = () => 
    inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please add a description to your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please add installation instructions if needed',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please add usage instructions if needed',
    },
    {
      type: 'checkbox',
      message: 'Which license have you used?',
      name: 'license',
      choices: ["None", "MIT", "GPLv2", "Apache" ],
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please add list of contributors and collaborators',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please add test information if any',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    }
]);

const generateMarkdown = (data) =>
`# ${data.title}      

## Description

${data.description}

## Table of Contents

Installation
Usage
License
Contributing
Tests
Questions

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Credits

${data.credits}

## Tests

${data.test}

## Questions

My GitHub profile is github.com/${data.username} should you want to get into contact or view my other projects.

Feel free to email me at ${data.email} if you have any questions regarding the project.

`;

promptUser()
  .then((data) => fs.writeFile('readme.md', data))
  .then(() => console.log('Successfully wrote to readme.md'))
  .catch((err) => console.error(err));







// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();