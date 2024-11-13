// Function to copy text
// Get the input and button elements
let input = document.getElementById("input");
let button = document.getElementById("button");
function copy() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(input.value);
  } else {
    // Fallback method for older devices
    input.select();
    document.execCommand("copy");
  }

  button.textContent = "Copied";
}
