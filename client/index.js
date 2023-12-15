/// create client socket io and connect to the server
const socket = io();


/// import elements
const messageBox = document.getElementById("message-box");
const input = document.getElementById("input");
const sendButton = document.getElementById("send-button");


/// sendButton event listener
sendButton.addEventListener("click",()=>{
    const message = input.value;

    /// emit custom event to server
    socket.emit("message", message);

    input.value="";
});

/// event listener for the server events
socket.on("message",(data)=>{
    const li = document.createElement("li");
    li.textContent = data;
    messageBox.appendChild(li);
});

