// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `https://choosealicense.com/licenses/${license.toLowerCase()}`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `This application is covered under the ${license} license`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contributors, test, github, email, license}) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);
  
  return `# ${title}
  ${licenseBadge}
  ##### Table of Contents  
  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [Contributions](#contributions)  
  [Tests](#tests)  
  [Questions](#questions)  
  [License](#license)  

  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributions
  ${contributors}

  ## Tests
  ${test}

  ## Questions
  * Github: [${github}](https://www.github.com/${github})
  * Email: <a href="mailto:${email}">${email}</a>
  
  ## License
  ${licenseSection}  
  ${licenseLink} 
`;
}

module.exports = generateMarkdown;
