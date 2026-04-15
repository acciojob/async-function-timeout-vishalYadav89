const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Function to create delay using Promise
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle display
async function showMessage(message, delay) {
    await wait(delay);
    output.innerText = message;
}

// Event listener
button.addEventListener("click", function (e) {
    e.preventDefault(); // prevent form reload

    const message = textInput.value;
    const delay = parseInt(delayInput.value);

    showMessage(message, delay);
});