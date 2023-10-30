# Bank of Flatiron - React Transaction Tracker

This project is a React web application designed to help users manage their bank transactions. The goal of this project was to practice building React components, managing state, handling events, and fetching data from a local server. This README provides an overview of the project, including its features, setup instructions, and guidelines.

## Author

Conrad Kambi
https://github.com/conokisekai

## Project Overview

In this application, users can:

- **View Transactions:** See a table displaying their recent bank transactions.
- **Add Transactions:** Fill out and submit a form to add new transactions to the table. Note that the new transactions are not persisted to the backend server.
- **Filter Transactions:** Filter transactions by typing into the search bar. Only transactions with descriptions matching the search term are displayed.

## Project Setup & Data Fetching

To set up the project:

1. **Create a Project Folder:** Create a new project folder on your local machine.
2. **Create a GitHub Repository:** Create a private GitHub repository for your project. Add your TM as a contributor for grading purposes.
3. **Add Database Configuration:** In your project directory, create a `db.json` file with the necessary data for your server DB. Use this data for your JSON DB server.
4. **Start Backend Server:** Run `json-server --watch db.json` to start the local server. Test the server by visiting `http://localhost:8001/transactions` in your browser.

## Core Deliverables

- **Transaction Table:**
  - A table displays all transactions fetched from the server.
  
- **Transaction Form:**
  - Users can fill out and submit the form to add new transactions. The new transactions are added to the table, although they are not persisted to the backend.

- **Transaction Filtering:**
  - Users can filter transactions by typing into the search bar. Only transactions with descriptions matching the search term are shown in the table.

## Bonus Deliverables

In addition to the core features, users can:

- **Sort Transactions:** Transactions can be sorted alphabetically by category or description.
  
- **Delete Transactions:** Users can delete a transaction, which removes it from the table.

## Development Process

To work on the project:

- **Clone the Repository:** Clone the project repository to your local machine.
- **Install Dependencies:** Run `npm install` to install project dependencies.
- **Start Development Server:** Run `npm start` to start the development server. The application will be running at `http://localhost:3000`.


# LICENCE
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
