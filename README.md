# SMARTSHOPPER

![Homepage Screenshot](https://i.imgur.com/XXH9LpE.png)

[Go to homepage](https://smartshopper-final.herokuapp.com/static)

A real-time shopping list app that can be shared with other users. Users have the ability to create shopping lists with a list of items that can be updated, deleted and mark as purchased. Built with NERDS Stack (Node.js, Express.js, React.js, Databases using SQL), Test-driven Development (TDD) practices and RESTful API.

## Install

To get you started you can first clone the repository to your local machine:

```
$ git clone https://github.com/darccide/smartshopper.git

```

Install [Node](https://nodejs.org/en/download/) if you don't already have it.

Also you will need to have [Postgres](https://postgresql.org) installed on your computer for databases and data management.

Make sure you download all dependencies to the appropriate locations.

## Setup

Once all the necessary cloning and downloading are completed you will need to create a `.env` file for your environmental variables. These are sensitive variable such as the `secret` for `express-session` that should not be seen by the public. If you do decide to push this code to github, make sure your `.env` is listed in your .gitignore file.

Now that the above has been executed the app can be run developmentally on your machine.

In your terminal in the appropriate folder, run the following.

```
$ npm run dev
```

The app should appear on http://localhost:3000.

Create a user by signing up in top right screen. Then click on the `SMARTSHOPPER LISTS` link in the top right of the page

You will then see a list of shopping lists you can choose from as well as create your own.

Click on one and you will see the option to change the title of the list as well as delete it. You will also see a list of items for each list with functionality to add an item, update an item, mark an item as purchased or unpurchased ("\$") and delete an item ("X").

## Running the tests

[Jasmine](https://jasmine.github.io/) was used to implement Test-Driven Development(TDD) in the construction of this app. All the tests can be found in the `/client/spec` file. Unit and integration tests were written for the different models with CRUD operations in mind. From the command line you can use `npm test {test file pathway}` to test.

```
$ npm test ./client/src/spec/integration/items_spec.js
```

## Built With NERDS Stack

- [Node](https://nodejs.org/en/): Javascript runtime environment for app backend
- [Express](https://expressjs.com/): Popular and minimalist framework for Node.js
- [React](https://reactjs.org/): Javascript front-end library for UI (user interface) component rendering
- [Postgresql](https://www.postgresql.org/): Relational Database system for data management

## Author

Steven Thomson
