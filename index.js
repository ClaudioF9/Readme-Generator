// console.log("hello");
const fs = require("fs");
// const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// // array of questions for user
const promptUser = () => 
    inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: function (data) {
        if (data.length < 1) {
          return console.log("Please enter a title for your project");
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please add a description to your project',
      validate: function (data) {
        if (data.length < 1) {
          return console.log("Please enter a valid description for your project");
        } else {
          return true;
        }
      }
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
      choices: ["GNU GPL v3", "Apache 2.0", "MIT", "The Unlicensed"],
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please add list of contributors and collaborators if any',
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
      validate: function (data) {
        if (data.length < 1) {
          return console.log("Please enter a valid Github username");
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: function (data) {
        if (!data.includes("@")) {
          return console.log("Please enter a valid email address");
        } else {
          return true;
        }
      }
    }
]);

//--------------------------------------------------------------------------------------------------
promptUser()
  .then((data) => fs.writeFile('readme.md', generateMarkdown(data), (err) => {
    if (err) throw err;
  }))
  .then(() => console.log('Successfully created your readme.md!!'))
  //------------------------------------------------------------------------------------------------


  