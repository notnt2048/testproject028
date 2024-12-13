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

// Array of image paths
const images = [
    "images/images (1).png",
    "images/images (2).png",
    "images/images (3).png",
    "images/images (4).png",
    "images/images (5).png",
    "images/images (6).png",
    "images/images (7).png",
    "images/images (8).png",
    "images/images (9).png",
    "images/images (10).png",
    "images/images (11).png",
    "images/images (12).png",
    "images/images (13).png",
    "images/images (14).png",
    "images/images (15).png",
    "images/images (16).png",
    "images/images (17).png",
    "images/images (18).png",
    "images/images (19).png",
    "images/images (20).png",
    "images/images (21).png",
    "images/images (22).png",
    "images/images (23).png",
    "images/images (24).png",
    "images/images (25).png",
    "images/images (26).png",
    "images/images (27).png",
    "images/images (28).png",
    "images/images (29).png",
    "images/images (30).png",
    "images/images (31).png",
    "images/images (32).png",
    "images/images (33).png",
    "images/images (34).png",
    "images/images (35).png",
    "images/images (36).png",
    "images/images (37).png",
    "images/images (38).png",
    "images/images (39).png",
    "images/images (40).png",
    "images/images (41).png",
    "images/images (42).png",
    "images/images (43).png",
    "images/images (44).png",
    "images/images (45).png",
    "images/images (46).png",
    "images/images (47).png",
    "images/images (48).png",
    "images/images (49).png",
    "images/images (50).png",
    "images/images (51).png",
  ];
  
  let currentIndex = 0; // Tracks the current image index

const imageDisplay = document.getElementById("image-display");
const imageNumberInput = document.getElementById("image-number");
const accuracyPercentage = document.getElementById("accuracy-percentage");
const accuracyBar = document.querySelector(".progress-bar::before");

// Update the image display and accuracy bar
const updateImage = () => {
  imageDisplay.src = images[currentIndex];
  imageNumberInput.value = currentIndex;

  const accuracy = currentIndex > 0 ? (((currentIndex) / (currentIndex+1)) * 100).toFixed(2) : 0;
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
  let color = "red"; // Default
  if (accuracyValue >= 100) color = "#48ff00";
  else if (accuracyValue >= 99.9) color = "#ff76ff";
  else if (accuracyValue >= 99.8) color = "#ff00fe";
  else if (accuracyValue >= 99.5) color = "#8f00ff";
  else if (accuracyValue >= 99) color = "#000aff";
  else if (accuracyValue >= 98) color = "#0089ff";
  else if (accuracyValue >= 97) color = "#00fffd";
  else if (accuracyValue >= 95) color = "#00ff7e";
  else if (accuracyValue >= 90) color = "#48ff00";
  else if (accuracyValue >= 80) color = "yellow";
  else if (accuracyValue >= 60) color = "orange";

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