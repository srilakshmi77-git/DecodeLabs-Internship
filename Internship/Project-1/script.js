let cart = 0;

function addToCart(){
cart++;
document.getElementById("cartCount").innerText = cart;
}

function showCart(){
alert("Items in Cart: " + cart);
}

function toggleTheme(){
document.body.classList.toggle("dark");
}

function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name==="" || email===""){
alert("Please fill all fields");
return false;
}

alert("Message Sent Successfully!");
return true;
}

function scrollTopPage(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}

document.getElementById("search").addEventListener("keyup",function(){
let value=this.value.toLowerCase();
let cards=document.querySelectorAll(".card");

cards.forEach(card=>{
let text=card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}
});
});