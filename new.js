let users = [];
let bookings = [];
let cost = 0;

function register(){

let user = document.getElementById("regUser").value;
let pass = document.getElementById("regPass").value;

users.push({user,pass});

alert("Registration Successful");

}

function login(){

let user = document.getElementById("loginUser").value;
let pass = document.getElementById("loginPass").value;

let found = users.find(u => u.user===user && u.pass===pass);

if(found){

document.getElementById("auth").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");

}
else{
alert("Invalid Login");
}

}

function checkStorage(){

let available = true;

if(available){

alert("Storage Available");
document.getElementById("storageSection").classList.remove("hidden");

}
else{

alert("No Space Available");

}

}
function confirmBooking(){

let region = document.getElementById("region").value;
let product = document.getElementById("product").value;

if(region === ""){
alert("Please select region");
return;
}

bookings.push({region,product,cost});

document.getElementById("receipt").innerHTML =
"Booking Confirmed <br>" +
"Region: " + region +
"<br>Product: " + product +
"<br>Total Cost: ₹" + cost +
"<br>Receipt Generated";

}

function calculateCost(){

let unit = document.getElementById("unit").value;
let days = document.getElementById("days").value;

cost = unit * days;

document.getElementById("cost").innerHTML = "Total Cost: ₹"+cost;

}

function confirmBooking(){

let product = document.getElementById("product").value;

bookings.push({product,cost});

document.getElementById("receipt").innerHTML =
"Booking Confirmed<br>Product: "+product+
"<br>Cost: ₹"+cost+
"<br>Receipt Generated";

}

function logout(){

location.reload();

}