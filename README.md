# README Generator

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

##### Table of Contents

[Description](#description)  
 [Installation](#installation)  
 [Usage](#usage)  
 [Contributions](#contributions)  
 [Tests](#tests)  
 [Questions](#questions)  
 [License](#license)

## Description

This application takes user prompts through a CLI and generates a professional README markdown file. This application is intended to help users cut down time having to format the necessary information that is typically presented in sa professional README. This application utilizes node.js with the Inquirer and File System modules to prompt the user for information and create a new file respectively. 

## Installation

To install dependencies, run the following command:

```
npm i
```

## Usage

To use, run the command in the terminal.

```
node index.js
```

The user will see questions regarding the project. In the terminal, type in the information regarding the question and press the 'enter' key once done answering.

![Screenshot of terminal displaying prompts for README generator](./assets/images/readme-gen.png)

Once all questions are answered, if successful, a final prompt will display saying "generatedREADME.md created!". A new markdown file called ```generatedREADME.md``` will be created within the main project folder with the user provided information formatted in a professional README.

![Screenshot of generated README markdown file](./assets/images/readme-ss1.png)  
![Screenshot of generated README file shown in preview](./assets/images/readme-ss2.png)


## Video Walkthrough
For a video demonstration of this application [click here](https://drive.google.com/file/d/1NIR-Lh6B1cYJHNv0WUSicYCphygRZuA6/view?usp=drive_link)

## Contributions

[Starter code](https://github.com/gachoi06) provided by Github users:  
[Xander Rapstine](https://github.com/Xandromus)  
[Grace Choi](https://github.com/gachoi06)

## Tests

For tests, run the following command:

```
npm test
```

## Questions

For any questions regarding the repository, contact me via:

- Github: [dgomie](https://www.github.com/dgomie)
- Email: <a href="mailto:danny.f.gomez@gmail.com">danny.f.gomez@gmail.com</a>

## License

This application is covered under the MIT license  
 https://choosealicense.com/licenses/mit
