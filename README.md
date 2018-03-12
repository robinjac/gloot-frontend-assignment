# G:LOOT front-end assignment
## Instructions
Build a front-end application that communicates with the server provided in this repository. You may use any library/framework/technique/boilerplate that you like and deem suitable for this assignment.

The application you will build is a very simple player management tool. The user should be presented with a list of players received from the server, and have the option to add new players and update/delete existing ones. Think [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)

## How to run the server
The server is a minimal HTTP-server exposing a REST-type API written using nodeJS and Express. You may alter the server code in any way you wish.

You will need to have nodeJS installed on your computer to run the server.

 1. Clone this repository.
 2. Open a terminal and run `npm i && npm run start` from the project root.
 3. The server is now running on `localhost:3000`. You can test the server by going to `http://localhost:3000/players` in your browser.

The API is described in `index.js` within the project root.

## Evaluation
These are some of the things we appreciate:

 - Easy, clean and readable code, no unnecessary complexity.
 - Usage of a component-based library/framework (react, angular, vue or similar).
 - Testable code (separation of concern, referential transparency).
 - Handling of asynchronous fetching of data from an API.
 - Do not reinvent the wheel :)
 - Display some CSS/styling skills.
