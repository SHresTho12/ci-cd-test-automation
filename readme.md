# My Project

## Overview

Here I have used the git hub actions workflow to automate the testing and ci/cd pipeline for the project. The project is a simple html and css project. The project is deployed on github pages.

## Technologies Used

- Testing: Jest
- Frontend: HTML, CSS
- CI/CD: GitHub Actions
- Deployment: GitHub Pages

## Running Tests

To run the tests, you can use the following command:

`npm test`

For running basic test
` npm test .\test\basic.test.js`

For advanced tests

The tests are written with the help of Jest.

## CI/CD Pipeline

This project uses a CI/CD pipeline implemented with GitHub Actions. Each push to the `main` branch triggers the following workflow:

1. **Build and Test**: A clean installation of node dependencies is done, followed by building the source code and running tests across different versions of Node.js.

2. **Deploy**: If the tests pass successfully, the website is automatically deployed to GitHub Pages.

## How to Contribute

Provide guidelines for contributing to the project, such as how to set up the development environment, coding standards, and how to submit pull requests.
