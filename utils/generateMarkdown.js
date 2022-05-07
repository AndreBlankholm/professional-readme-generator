// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licensePicked = license[0];

  let licenseBadge = "";

  if (licensePicked === "MIT") {
    licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  if (licensePicked === "Apache") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (licensePicked === "Boost") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (licensePicked === "BDS 3-Clause") {
    licenseBadge =
      "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const renderLicenseTableOfContents = (data) => {
  if (data.license === false) {
    return "";
  } else {
    return "* [License](#license)";
  }
};

function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.github}/${data.title}
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTableOfContents(data)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${
    data.installation
  }
  # Usage
  In order to use this app, ${data.usage}
  ${renderLicenseBadge(data.license)}
  # Contributions
  Contributors: ${data.contributions}
  # Tests
  The following is needed to run tests: ${data.test}
  # Questions
  If you have any questions about the repository contact ${
    data.contributions
  } directly at : ${data.email}.
  `;
}

module.exports = generateMarkdown;
