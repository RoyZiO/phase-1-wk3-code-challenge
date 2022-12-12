

print =  (value) => {console.log(value)}
fetch('http://localhost:3000/films')
// print(res)
.then(res=>(res.json()))
.then(data=> {
    //console.log(data.films[0]);
     data=data.films
    // selector for our first movie poster
    image = document.querySelector('img.rounded-float-start')
    title = document.querySelector('h5.card-title')
    description = document.querySelector('p.card-text')
    info = document.querySelectorAll('li.list-group-item')
    footer = document.querySelector('small'); print(info)
    // descrition
    image.src = data[0].poster 
    title.textContent = data[0].title
    description.textContent = data[0].description
    info[0].textContent = `Showtime =   ${data[0].showtime}`
    info[1].textContent = `Runtime =   ${data[0].runtime} mins`
    info[2].textContent = `Tickets-Sold =  ${data[0].tickets_sold}`
    remainder = (data[0].capacity)-(data[0].tickets_sold)
    footer.textContent = `tickets-Remaining:${remainder}`  
})


// side navigation menu bar content displayer
fetch('http://localhost:3000/films')
.then(res=>(res.json()))

.then(data=>{

 let i = 0
 do{
  i+=1
  data2= data.films[i]
  // data =data.films;print(data[0].title)
  const side = document.querySelectorAll('a.others'); 
  // print (side[i])
  side[i].textContent = data2.title
//  print(data2.title)
 }while(i<14)   
 const side = document.querySelectorAll('a.others'); 
 print (side[0].textContent)
  })
  // side bar navigation menu displayer
document.getElementById("openNav").addEventListener("click", 
function openNav() {
    document.getElementById("mySideNav").style.width = "400px";
    //document.querySelector('div.header').style.marginLeft = "350px";
    document.querySelector('div.card').style.marginLeft = "400px";
    // print( document.getElementById("mySidenav"))
  });
  document.getElementById("closeNav").addEventListener("click", 
  function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    //document.querySelector('div.header').style.marginLeft = "0";
    document.querySelector('div.card').style.marginLeft = "0";
  });
  print(`hello`)

  const as = document.querySelectorAll('a.others');print(as)
  addEventListener('onClick',()=>{
  print("done")
  fetch('http://localhost:3000/films')
.then(res=>(res.json()))
.then(data=>{
  print(data)
  
   
  })

})