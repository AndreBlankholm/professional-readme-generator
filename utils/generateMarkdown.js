// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licensePicked = data.license;

  let licenseBadge = "";

  if (licensePicked === "MIT") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return licenseBadge;
  }
  if (licensePicked === "Apache") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return licenseBadge;
  }
  if (licensePicked === "Boost") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      return licenseBadge;
  }
  if (licensePicked === "BDS 3-Clause") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      return licenseBadge;
  } if (licensePicked === 'None') {
    return licenseBadge;
  }

};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
 const licensePicked = data.license;
 
 if(licensePicked === 'None') {
   return "";

 } else {
   return `# Licence
   ${renderLicenseBadge(data)}`;
 }
}

// TODO: Create a function to generate markdown for README
const renderLicenseTableOfContents = (data) => {
  const licensePicked = data.license;
 
  if(licensePicked === 'None') {
    return "";
 
  } else {
    return "* [License](#license)";
  }
};

function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.github}/${data.title}
  https://drive.google.com/drive/folders/1azBebUP2Qs6jijgkLprROLD2_Iz9vEqR?usp=sharing
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTableOfContents(data)}
  * [Contributing](#contributions)
  * [Tests](#test)
  * [Questions](#questions)
  # Installation
  The following necessary dependencies must be installed to run the application: ${
    data.installation
  }
  # Usage
  In order to use this app, ${data.usage}
  ${ renderLicenseSection(data)}
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
