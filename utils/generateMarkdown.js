// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

[![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)](https://opensource.org/licenses/${data.license})

## Description

${data.description}

## Table of Contents

* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.installation}

## Usage 

${data.usage}

## License

[${data.license} License](https://opensource.org/licenses/${data.license})

## Contributing

${data.contributing}

## Test

${data.tests}

## Questions

Feel free to contact me with any questions via the information below:

GitHub: [https:/github.com/${data.github}](https:/github.com/${data.github})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
