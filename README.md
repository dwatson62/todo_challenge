ToDo Challange
=======================

## Synopsis

My submission for the ToDo Challenge. User can add tasks, or select individual and multiple tasks for deleting or marking as completing. Can also delete all tasks marked as completed.

Was not able to work out how to create the filters, or how to fully setup travis to run the protractor tests. Currently it only runs karma.

To install:

- Clone down to your machine
- In the local directory run: npm install, npm install bower, bower install
- To execute file run: open index.html
- To run karma tests: karma start test/karma.conf.js
- To run protractor tests: protractor test/e2e.conf.js

## Technologies Used

- Javascript
- Angular
- Karma, Protractor

## Collaborators

- Daryl (http://www.github.com/dwatson62)

## Still to complete/refactor

- [ ] Add filters for the todo list
- [ ] Setup travis.yml correctly. So far it runs the karma tests but not protractor
