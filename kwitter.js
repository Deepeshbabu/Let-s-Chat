function addUser() 
{
    un = document.getElementById("username").value ;
    localStorage.setItem("User-Name", un) ;
    window.location = "kwitter_room.html" ;
}