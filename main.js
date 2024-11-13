function copy() {
  let input = document.getElementById("input");
  let button = document.getElementById("button");

  navigator.clipboard.writeText(input.value);
  button.textContent = "Copied";
}
