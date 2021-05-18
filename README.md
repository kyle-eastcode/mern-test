# MERN Todo App

The following repo is a base project you can use to develop a simple Todo Application that is powered by MERN. For the purpose of this test, we want you to use the following base project, you can change or customize it any way that you see fit, this is meant to be a starting point for you. The following are the requirements of the test

## Requirements of the Test

The point of this test is to build a Todo application that has React as the frontend ie: `client`, Express as the backend ie: `server`, Node as the runtime ie: `package.json` and Mongo for our Database ie: `MonogoDB`.

With this stack of technologies, we would like you to build an app that can be separated into two sections. The first section will be an input and a submit button where the user can type in a new "todo item" and push the button to save it to our MonogoDB database. Once the item is saved to the database, I would like it to show up in the second section, directly below the first section. This second section should be a list of all the "todo items" the user has saved, and should have a button to the right of each item that would allow the user to delete that item from the list and thus remove the entry from the database.

** For Bonus Points **

I would like you to add more functionality that would allow the user to update an item already listed on the page, you can implement the backend and frontend design how ever you prefer.

### Requirements

- MonogoDB (running locally)
- Node (v14+)
- NPM (v6+)

<hr />

### Setup

1. Clone this repo
```
git clone ...
```

2. Install the dependencies
```
npm install
```

3. Run the application locally
```
npm run start
```