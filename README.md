# Cows milk production company website

## What is it ?

A milk production company (internal) website to manage its daily operations:

- Cow registration (cow number, entry date, pedigree: Holstein, mountbilliard)
- Recording the medical examination of cows (examination day, disease)
- Birth registration (mother cow number, calving date)
- Recording the total daily milk production (day, the amount of milk in liters)

## Functionalities

- The frontend has the Lists and Forms related to the daily operations mentioned above.
- The Backend contains the logic responsible for all CRUD operations of the daily operations mentioned above.
- Data is stored in JSON files.
- Communication between the Client and the Server is done using Restful web services.

## Technologies Stack used in frontend

- **Pug.js**: formerly known as Jade, is a templating engine designed to render HTML in server-side technologies such as Node.js.

- **CSS**: Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.

## Technologies Stack used in backend

- **Javascript**: often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web.
- **Node.js**: Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side.
- **Express.js**: or simply Express, is a back end web application framework for building RESTful APIs with Node.js.
- **RESTful Apis**: REST stands for Representational State Transfer, which is an architectural style for building web services.
- **Sessions**: Session-based authentication is a stateful authentication technique where we use sessions to keep track of the authenticated user.

## Project Structure

The Website is built using MVC

┌── `controllers` \
├── `database` \
├── `models` \
├── `public` \
├── `routers` \
├── `utils` \
├── `views` \
└── `app.js`

## Requirement to run the project

- node

## How to use it

- clone the repo : \
  `git clone https://github.com/Khalid-AC/cows-milk-production-website.git`

- go to project directory \
  `cd cows-milk-production-website`

- install dependecies \
  `npm install`

- run the project \
  `npm run start`
