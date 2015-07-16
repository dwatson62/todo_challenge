ToDo Challange
=======================

[![Code Climate](https://codeclimate.com/github/dwatson62/todo_challenge/badges/gpa.svg)](https://codeclimate.com/github/dwatson62/todo_challenge) [![Build Status](https://travis-ci.org/dwatson62/todo_challenge.svg?branch=master)](https://travis-ci.org/dwatson62/todo_challenge)

## Synopsis

Original repo:(https://github.com/makersacademy/todo_challenge)

My submission for the ToDo Challenge. User can add tasks, or select individual and multiple tasks for deleting or marking as completing. Can also delete all tasks marked as completed.

Was not able to work out how to create the filters, or how to fully setup travis to run the protractor tests. Currently it only runs karma.

To install:

- Clone down to your machine
- In the local directory run: npm install, npm install bower, bower install
- Run: node server.js
- To run karma tests: karma start test/karma.conf.js
- To run protractor tests: protractor test/e2e/conf.js

## Technologies Used

- Javascript
- Angular
- Karma, Protractor

## Collaborators

- Daryl (http://www.github.com/dwatson62)

## Still to complete/refactor

- [ ] Add filters for the todo list
- [ ] Setup travis.yml correctly. So far it can only run the karma tests
