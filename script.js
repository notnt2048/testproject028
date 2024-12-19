// Event listener for keyboard controls
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") { // Right arrow or space key
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
  } else if (event.key === "ArrowLeft") { // Left arrow key
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
  }
});

// Generate an array of image paths dynamically
const images = Array.from({ length: 1015 }, (_, i) => `images/images (${i + 1}).png`);

let currentIndex = 0; // Tracks the current image index

const imageDisplay = document.getElementById("image-display");
const imageNumberInput = document.getElementById("image-number");
const accuracyPercentage = document.getElementById("accuracy-percentage");
const accuracyBar = document.querySelector(".progress-bar::before");

// Update the image display and accuracy bar
const updateImage = () => {
  imageDisplay.src = images[currentIndex];
  imageNumberInput.value = currentIndex;

  const accuracy = currentIndex > 0 ? (((currentIndex) / (currentIndex + 1)) * 100).toFixed(2) : 0;
  updateAccuracy(accuracy);
};

// Update the accuracy percentage, bar, and grade
const updateAccuracy = (accuracy) => {
  const accuracyValue = Math.min(Math.max(accuracy, 0), 100); // Clamp between 0 and 100

  // Update percentage text
  accuracyPercentage.textContent = `Accuracy: ${accuracyValue}%`;

  // Determine grade
  let grade = "F"; // Default grade
  if (accuracyValue >= 97) grade = "A+";
  else if (accuracyValue >= 93) grade = "A";
  else if (accuracyValue >= 90) grade = "A−";
  else if (accuracyValue >= 87) grade = "B+";
  else if (accuracyValue >= 83) grade = "B";
  else if (accuracyValue >= 80) grade = "B−";
  else if (accuracyValue >= 77) grade = "C+";
  else if (accuracyValue >= 73) grade = "C";
  else if (accuracyValue >= 70) grade = "C−";
  else if (accuracyValue >= 67) grade = "D+";
  else if (accuracyValue >= 63) grade = "D";
  else if (accuracyValue >= 60) grade = "D−";

  // Display grade alongside accuracy
  accuracyPercentage.textContent = `Accuracy: ${accuracyValue}% (${grade})`;

  // Change color and width based on accuracy
  let color = "#ff0000"; // Default
  if (accuracyValue >= 100) color = "#48ff00";
  else if (accuracyValue >= 99.9) color = "#00fff9";
  else if (accuracyValue >= 99.89) color = "#00ff85";
  else if (accuracyValue >= 99.88) color = "#14ff00";
  else if (accuracyValue >= 99.875) color = "#aaff00";
  else if (accuracyValue >= 99.865) color = "#fff700";
  else if (accuracyValue >= 99.85) color = "#ffdd00";
  else if (accuracyValue >= 99.83) color = "#ff9600";
  else if (accuracyValue >= 99.8) color = "#ff5200";
  else if (accuracyValue >= 99.75) color = "#ff0040";
  else if (accuracyValue >= 99.7) color = "#ff0087";
  else if (accuracyValue >= 99.6) color = "#ff00c3";
  else if (accuracyValue >= 99.5) color = "#b500ff";
  else if (accuracyValue >= 99.3) color = "#7100ff";
  else if (accuracyValue >= 99) color = "#0002ff";
  else if (accuracyValue >= 98) color = "#0042ff";
  else if (accuracyValue >= 97) color = "#0094ff";
  else if (accuracyValue >= 96) color = "#00fffd";
  else if (accuracyValue >= 95) color = "#00ffb2";
  else if (accuracyValue >= 93) color = "#00ff46";
  else if (accuracyValue >= 90) color = "#23ff00";
  else if (accuracyValue >= 85) color = "#fffb00";
  else if (accuracyValue >= 80) color = "#ffdd00";
  else if (accuracyValue >= 60) color = "#ff7b00";

  accuracyPercentage.style.color = color;
  accuracyPercentage.style.textShadow = `0px 0px 10px ${color}`;
  accuracyBar.style.backgroundColor = color;
  accuracyBar.style.width = `${accuracyValue}%`;
};

// Event listener for clicking the images (next image)
imageDisplay.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Event listener for the "Go" button
document.getElementById("go-button").addEventListener("click", () => {
  const newIndex = parseInt(imageNumberInput.value, 10);
  if (newIndex >= 0 && newIndex < images.length) {
      currentIndex = newIndex;
      updateImage();
  } else {
      alert("Invalid image number!");
  }
});

// Event listener for the "Reset" button
document.getElementById("reset-button").addEventListener("click", () => {
  currentIndex = 0;
  updateImage();
});

// Event listener for the "Back" button
document.getElementById("back-button").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// Initial display update
updateImage();
