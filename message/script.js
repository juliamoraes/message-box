var messages = document.getElementById("messages")
var button = document.getElementById("button")
var textbox = document.getElementById("textbox")

button.addEventListener("click", function(){
  var newMessage = document.createElement("list");
  newMessage.innerHTML = textbox.value; 
  messages.appendChild(newMessage);
  textbox.value = "";

});
