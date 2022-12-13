# Week 3 Code Challenge 

# FLATDANGO 

For this assessment, you'll be working on Flatdango.

Flatiron Movie Theater is open for business! You will be building out an application, Flatdango, that allows a user to purchase movie tickets from the
theater.
 

 # Project Setup

 ## Requirements

 1. Text editor such as VScode is required.
 2. The use of json-server to retrieved data.
 3. Knwowledge of HTML, JavaScript and CSS.

 ## Installations

 - Download the db.json file from the "Prerequisite data" section of the assignment.
 - Make sure that you have installed the json-server globally. If not, run this command: npm install -g json-server. This will install json-server and help to get the backend started.
 - To initiate the backend, run the following command while inside the project directory: json-server --watch db.json
 - The server can be tested by visiting http://localhost:3000/films through the browser, which is also the base URL for the API. 


 # Guidelines

 ## Core Deliverables

- The user should be able to See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. 
- The number of available tickets will need to be obtained by subtracting `tickets_sold` from the theater's `capacity`. 
- You will need to make a GET request to retrieve the film data.
- The user should also be able to see a menu with a list of all movies on the left side of the webpage.
- The user should also be able to buy tickets from the page, whereby number of tickets reduced by one every time the "Buy Ticket" button is clicked.
- The user should not be able to purhase tickets if the movie is sold out, that is, 0 tickets are available. 


# License

- This project is licensed under the GNU Lesser General Public License v 3.0.


# Author 
 
 - This project was contributed by:

        Roy Nzioki Ngei: https://github.com/RoyZiO







-------------------------------------



 