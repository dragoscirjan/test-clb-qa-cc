// To install run in terminal. This was created on a MacOS, but node is the only 
// main requirement

npm i 

// To run unit tests for API you can use such scripts inside api-test folder:

// Will hit this endpoint - DELETE /clear - to clear all messages
// Will show the status of request in responce 
npm run delete-messages 

// Will hit endpoint - GET /users - to view a list of users 
// Will show the array of users in response
npm run get-users

// Will hit endpoint - POST /messages/:userId/:message - to post a new message
// You can change userID and message inside script file
// Also change the text of the message
npm run post-messages

// Will hit GET /messages - to view a list of messages
// Will print all messages to the terminal
// It will throw an error if you run delete-messages first
npm run get-messages