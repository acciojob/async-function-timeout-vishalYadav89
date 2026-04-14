//your JS code here. If required.
// get elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// delay function using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// async function to handle click
async function handleClick() {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  // optional: show waiting message
  output.innerText = "Waiting...";

  // wait for given delay
  await wait(delay);

  // display message
  output.innerText = text;
}

// event listener
btn.addEventListener("click", handleClick);