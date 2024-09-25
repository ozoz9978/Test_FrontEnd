// Function to generate random color values
function getRandomColor() {
    return {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256)
    };
}
let theBody = document.getElementById("theBody");

// Function to change the background color of the body
function changeColor() {
    let { red, green, blue } = getRandomColor();
    let color = `rgba(${red}, ${green}, ${blue}, 1)`; // Use rgba format
    theBody.style.backgroundColor = color;
}

// Set an interval to change color every 1000 milliseconds (1 second)
setInterval(changeColor, 1000);