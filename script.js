//all selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;
let ghostImg = document.querySelector(".ghost-image");
let hideButton = document.querySelector(".hide-button");
let showButton = document.querySelector(".show-button");
let updateImg = document.querySelector(".update-img-button");
let messageButton = document.querySelector(".message-button");
let message = document.querySelector(".message");
let nameButton = document.querySelector(".name-button");


//create an onclick event for the Hide Me button
hideButton.onclick = (function(){
ghostImg.style.display = "none"                           
    
});

//create an onclick event for the Show Me button
showButton.onclick = (function(){
 ghostImg.style.display = "block"   
});

//create an onclick event for the Update Img button
updateImg.onclick = (function(){
ghostImg.src = "https://images.app.goo.gl/wcWK2PuDjUQC4Wbw8" 
});

//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag
messageButton.onclick = (function(){
  
});


//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag
nameButton.onclick = (function(){
    
});