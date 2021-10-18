//Config
//
We are using config to move all constant values we can use to separate 
file, so it will be easier to change them(if needed)
and use in many files(if needed).

//Page Objects
//
To make our code pretier, we move selectors to separate file
and use only links to them in test code.

//Tests
//
In tests we use our main page link from config file and use it 
in the fixture, so we start every test from the same page

//How to run
//
To install the test-suite use in terminal:

npm i

To run test you can use script written in package.json 

- To run language change test use in terminal: 

npm run language-test

- To run search test use in terminal:

npm run search-test