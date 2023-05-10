
# Mongoose + Typescript OOP Fully Tested API 
This API is a demonstration of what I can do with Typescript and Mongoose, also it is implemented with unitary and integration tests maded with Mocha, Chai and Sinon libraries.

This project uses Docker, to run, acess the terminal and type: docker compose up -d to use a detached terminal, otherwise console logs and images warnings will be showed in the terminal.

Also, this is a Node.js API. The Project includes some essencial scripts that you can find in package.json




## Funcionalidades

- Routes for car and motorcycles
- Created using OOP 
- Mongoose ODM + MongoDB
- Abstract classes that can be used to easily expand the project


## Starting the application

1st step: Clone the repo and in the directory, install the dependencies with `npm i`

2nd step: Run `docker compose up or docker compose up -d`

3th step: With thunder client or insomnia (or another API Client of your choice) you can now test the API and the database.



## Running the tests

To run the integration and unitary tests, run:

```bash
  npm run test:mocha
```
or

```bash
  npm run test:coverage
```

Running `npm run test` will use [@Trybe](https://github.com/betrybe]) premade tests to assure that the project is OK.
