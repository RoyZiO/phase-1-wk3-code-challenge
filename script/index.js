

//First, we fetch the data on films from the mock server to initialize the webpage
function fetchData() {
  fetch("  http://localhost:3000/films")
    .then((response) => response.json())
    .then((data) => appendFirstMovie(data));
}
fetchData();
 
//The function below is created to append (upload) the first film from our JSON file, displaying the poster, showtime, runtime, and available tickets

// The function also creates two buttons, one for the menu and the other for the ticket purchase button. 
function appendFirstMovie(data) {
  let first = data[0];
  let butonn = document.getElementById("button");
  butonn.innerHTML = "";
  let image = document.getElementById("pic");
  let title = document.getElementById("title");
  let runtime = document.getElementById("runtime");
  let showtime = document.getElementById("showtime");
  let tickets = document.getElementById("tickets");
  let description = document.getElementById("description");
  let button = document.createElement("button");
  button.id = "btn";
  button.textContent = "Buy Ticket";

  //Add an clicking event for the menu, to enable the selection of a particular movie title to present the details
  button.addEventListener("click", () => {
     first.soldTicket += 1;
    handleBuying(first)
    let total = first.capacity - first.soldTicket;
    if (first.soldTicket < first.capacity) {
      document.getElementById("tickets").innerHTML = total;
    }
    else if (first.soldTicket = first.capacity) {
      document.getElementById("tickets").innerHTML = "SOLD OUT!";    // Once all the tickets have been sold, the result of pressing the "Buy Ticket" button will be a string: "SOLD OUT"
      handleBuying(first)
    }
  });
  title.textContent = first.title;
  runtime.textContent = first.runtime;
  showtime.textContent = first.showtime;
  tickets.textContent = first.capacity - first.soldTicket;
  description.textContent = first.description;
  image.src = `
    ${first.poster}
    `;
  butonn.appendChild(button);
}

//The function 'appendMenu()'fetches the list of movies  
function appendMenu() {
  fetch("  http://localhost:3000/films")
    .then((response) => response.json())
    .then((data) => menuTitles(data));
}
appendMenu();

//The function 'menuTitles()' displays the list of movies in the menu section of the webpage
function menuTitles(data) {
  data.forEach((item) => {
    let title = document.createElement("li");
    title.id = "list";
    title.addEventListener("click", () => {
      const i = item.id;
      appendIndividualDetails(data[i - 1]);
    });
    let menu = document.getElementById("menu");
    title.textContent = item.title;
    menu.appendChild(title);
  });
}

//The function 'clickMenu()' is called to display a pointer whenever the user hovers over the menu section
 
function clickMenu() {
  const menuPointer = document.getElementById('menu')
    menuPointer.style.cursor="pointer"
    
}
clickMenu();

//The function appendIndividualDetails() displays the details of the specific movie that is selected by the user
function appendIndividualDetails(item) {
  let mainButton = document.getElementById("button");

  mainButton.innerHTML = "";

  let image = document.getElementById("pic");                                 //These get requests are to display the other 14 movies

  let title = document.getElementById("title");

  let runtime = document.getElementById("runtime");

  let showtime = document.getElementById("showtime");

  let tickets = document.getElementById("tickets");

  let description = document.getElementById("description");

  // Add a button to enable the purchase of tickets

  let button = document.createElement("button");
  button.id = "btn";
  button.textContent = "Buy Ticket";
  let total = item.capacity - item.tickets_sold;


  //Add clicking event to reduce the number of tickes by 1 whenever the user clicks on "Buy Tickets"
  
  button.addEventListener("click", () => {
    //if tickets available is greater than 0 the total amount decreses by one every time it is pressed otherwise it prints a message


    item.tickets_sold += 1;
    handleBuying(item)

    let total = item.capacity - item.tickets_sold;
    if (item.tickets_sold < item.capacity) {
      document.getElementById("tickets").innerHTML = total;
    }
    else if (item.tickets_sold = item.capacity) {
      document.getElementById("tickets").innerHTML = " SOLD OUT!";
      handleBuying(item)
    }
  });

  title.textContent = item.title;
  runtime.textContent = item.runtime;
  showtime.textContent = item.showtime;
  tickets.textContent = item.capacity - item.tickets_sold;
  description.textContent = item.description;
  image.src = `
    ${item.poster}
    `;
  mainButton.appendChild(button);
}

function handleBuying(ticketsobj){
  fetch(`http://localhost:3000/films/${ticketsobj.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticketsobj),
  })
   .then((resp) => resp.json())
   .then((obj) => console.log(obj))
}