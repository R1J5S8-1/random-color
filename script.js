// Function to generate a random color
function getRandomColor() {
  // Generate a random hexadecimal color code
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to set the random color as the background color
function setRandomBackgroundColor() {
  // Get the random color
    const randomColor = getRandomColor();
    const buttonColor = getRandomColor();
    // Set the background color of the body
  document.body.style.backgroundColor = randomColor;
    const randomButtonColor = document.getElementById("colorButton");
    randomButtonColor.style.backgroundColor = buttonColor;
    // Set the background color of the button
  randomButtonColor.style.color = '#fff';
}

// Add event listener to the button
document
  .getElementById("colorButton")
  .addEventListener("click", setRandomBackgroundColor);
