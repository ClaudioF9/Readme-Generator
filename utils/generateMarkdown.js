// function to generate markdown for README
function generateBadge(data) {
  const licenseType = data.license[0];
  let badge = ""
  if (licenseType === "Apache 2.0") {
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (licenseType === "GNU GPL v3") {
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (licenseType === "MIT") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (licenseType === "The Unlicensed") {
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else {
      badge = ""
  };
  return badge; // 
};


//---------------------------------------------------------------------------------------------
const generateMarkdown = (data) => {
return `# ${data.title}      

${generateBadge(data)}


## Description
---

${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
5. [Questions](#questions)

## Installation 
---
<a name="#installation"></a>


${data.installation}

## Usage 
---
<a name="#usage"></a>

${data.usage}

## License 
---
<a name="#license"></a>

This project is licensed using the ${data.license} license.

## Credits 
---
<a name="#contributing"></a>

${data.credits}

## Tests 
---
<a name="#tests"></a>

${data.tests}

## Questions 
---
<a name="#questions"></a>

My GitHub profile is github.com/${data.username} should you want to get into contact or view my other projects.

Feel free to email me at ${data.email} if you have any questions regarding the project.

`;}
//---------------------------------------------------------------------------------------------



module.exports = generateMarkdown;
