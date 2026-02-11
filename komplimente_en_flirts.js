let myName = "";
let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

// Load messages when page opens
window.onload = function() {
    messages.forEach(msg => {
        displayMessage(msg.sender, msg.text);
    });
};

function sendMessage() {

    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    if (!myName) {
        myName = nameInput.value.trim();
        if (myName === "") {
            alert("Please enter your name!");
            return;
        }
        nameInput.disabled = true;
    }

    const messageText = messageInput.value.trim();
    if (messageText === "") return;

    const msgObject = {
        sender: myName,
        text: messageText
    };

    // Save message
    messages.push(msgObject);
    localStorage.setItem("chatMessages", JSON.stringify(messages));

    displayMessage(myName, messageText);

    messageInput.value = "";
}

function displayMessage(sender, text) {

    const chatBox = document.getElementById("chat-box");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (sender === myName) {
        messageDiv.classList.add("me");
    } else {
        messageDiv.classList.add("other");
    }

    messageDiv.innerHTML = `
        <div class="sender">${sender}</div>
        <div>${text}</div>
    `;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function clearChat() {
    localStorage.removeItem("chatMessages");
    location.reload();
}