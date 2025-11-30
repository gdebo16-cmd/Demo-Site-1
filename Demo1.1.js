function giveGreeting1() {
    const textbox = document.getElementById("text1");
    const message = "You cute!";
    textbox.value = message;
}

function giveGreeting2() {
    const textbox = document.getElementById("text1");
    const message = ["You cute!", "Such wow!", "Much amazing!"];
    const randomIndex = Math.floor(Math.random() * message.length);
   textbox.value = message[randomIndex];
}