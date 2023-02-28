// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}      

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
}

module.exports = generateMarkdown;
