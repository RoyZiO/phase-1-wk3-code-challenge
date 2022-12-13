

print =  (value) => {console.log(value)}

function fetchMovies() {
    fetch("http://localhost:3000/films")

    .then(response => (response.json()))
    .then(data => {
        data.films 
        image = document.querySelector('img.card-img-top')
    title = document.querySelector('h5.card-title')
    description = document.querySelector('p.card-text')
    info = document.querySelectorAll('li.list-group-item')
    footer = document.querySelector('small'); print(info)
   
    image.src = data[0].poster 
    title.textContent = data[0].title
    description.textContent = data[0].description
    info[0].textContent = `Showtime =   ${data[0].showtime}`
    info[1].textContent = `Runtime =   ${data[0].runtime} mins`
    info[2].textContent = `Available-Tickets =  ${(data[0].capacity)- (data[0].tickets_sold)}`
    

    })
}
fetchMovies();

function sideNavBar() {

    fetch('http://localhost:3000/films')
.then(response => (response.json()))

.then(data=>{

 let i = 0
 do{
  i+=1
  data2 = data.films[i]
 
  const side = document.querySelectorAll('a#others'); 
  
  side[i].textContent = data2.title

 } while (i<14)  

 print (side[i].textContent)
  })

}



  // Adding a click event for opening  the sidebar navigation plane 
document.getElementById("openNav").addEventListener("click", 

function openNav() {
    document.getElementById("mySideNav").style.width = "400px";
    document.querySelector('div.card').style.marginLeft = "400px";
    
  });

  //click event for closing the sidebar navigation plane 
  document.getElementById("closeNav").addEventListener("click", 
  function closeNav() {
    document.getElementById("mySideNav").style.width = "0";

    document.querySelector('div.card').style.marginLeft = "0";
  });
  print(`hello`)



//function to fetch the other movies from the database and display them on the navigation plane
//Clicking event to display ticket information on the webpage when the user clicks on a particular movie

function otherMovies() {
    const as = document.querySelectorAll('a.others');print(as)
    addEventListener('onClick',()=>{
    print("done")
    fetch('http://localhost:3000/films')
  .then(response=>(response.json()))
  .then(data=>{
    print(data)
    
    })
  
  })

} 
otherMovies();
  

