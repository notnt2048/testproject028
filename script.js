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
    "images/images (52).png",
    "images/images (53).png",
    "images/images (54).png",
    "images/images (55).png",
    "images/images (56).png",
    "images/images (57).png",
    "images/images (58).png",
    "images/images (59).png",
    "images/images (60).png",
    "images/images (61).png",
    "images/images (62).png",
    "images/images (63).png",
    "images/images (64).png",
    "images/images (65).png",
    "images/images (66).png",
    "images/images (67).png",
    "images/images (68).png",
    "images/images (69).png",
    "images/images (70).png",
    "images/images (71).png",
    "images/images (72).png",
    "images/images (73).png",
    "images/images (74).png",
    "images/images (75).png",
    "images/images (76).png",
    "images/images (77).png",
    "images/images (78).png",
    "images/images (79).png",
    "images/images (80).png",
    "images/images (81).png",
    "images/images (82).png",
    "images/images (83).png",
    "images/images (84).png",
    "images/images (85).png",
    "images/images (86).png",
    "images/images (87).png",
    "images/images (88).png",
    "images/images (89).png",
    "images/images (90).png",
    "images/images (91).png",
    "images/images (92).png",
    "images/images (93).png",
    "images/images (94).png",
    "images/images (95).png",
    "images/images (96).png",
    "images/images (97).png",
    "images/images (98).png",
    "images/images (99).png",
    "images/images (100).png",
    "images/images (101).png",
    "images/images (102).png",
    "images/images (103).png",
    "images/images (104).png",
    "images/images (105).png",
    "images/images (106).png",
    "images/images (107).png",
    "images/images (108).png",
    "images/images (109).png",
    "images/images (110).png",
    "images/images (111).png",
    "images/images (112).png",
    "images/images (113).png",
    "images/images (114).png",
    "images/images (115).png",
    "images/images (116).png",
    "images/images (117).png",
    "images/images (118).png",
    "images/images (119).png",
    "images/images (120).png",
    "images/images (121).png",
    "images/images (122).png",
    "images/images (123).png",
    "images/images (124).png",
    "images/images (125).png",
    "images/images (126).png",
    "images/images (127).png",
    "images/images (128).png",
    "images/images (129).png",
    "images/images (130).png",
    "images/images (131).png",
    "images/images (132).png",
    "images/images (133).png",
    "images/images (134).png",
    "images/images (135).png",
    "images/images (136).png",
    "images/images (137).png",
    "images/images (138).png",
    "images/images (139).png",
    "images/images (140).png",
    "images/images (141).png",
    "images/images (142).png",
    "images/images (143).png",
    "images/images (144).png",
    "images/images (145).png",
    "images/images (146).png",
    "images/images (147).png",
    "images/images (148).png",
    "images/images (149).png",
    "images/images (150).png",
    "images/images (151).png",
    "images/images (152).png",
    "images/images (153).png",
    "images/images (154).png",
    "images/images (155).png",
    "images/images (156).png",
    "images/images (157).png",
    "images/images (158).png",
    "images/images (159).png",
    "images/images (160).png",
    "images/images (161).png",
    "images/images (162).png",
    "images/images (163).png",
    "images/images (164).png",
    "images/images (165).png",
    "images/images (166).png",
    "images/images (167).png",
    "images/images (168).png",
    "images/images (169).png",
    "images/images (170).png",
    "images/images (171).png",
    "images/images (172).png",
    "images/images (173).png",
    "images/images (174).png",
    "images/images (175).png",
    "images/images (176).png",
    "images/images (177).png",
    "images/images (178).png",
    "images/images (179).png",
    "images/images (180).png",
    "images/images (181).png",
    "images/images (182).png",
    "images/images (183).png",
    "images/images (184).png",
    "images/images (185).png",
    "images/images (186).png",
    "images/images (187).png",
    "images/images (188).png",
    "images/images (189).png",
    "images/images (190).png",
    "images/images (191).png",
    "images/images (192).png",
    "images/images (193).png",
    "images/images (194).png",
    "images/images (195).png",
    "images/images (196).png",
    "images/images (197).png",
    "images/images (198).png",
    "images/images (199).png",
    "images/images (200).png",
    "images/images (201).png",
    "images/images (202).png",
    "images/images (203).png",
    "images/images (204).png",
    "images/images (205).png",
    "images/images (206).png",
    "images/images (207).png",
    "images/images (208).png",
    "images/images (209).png",
    "images/images (210).png",
    "images/images (211).png",
    "images/images (212).png",
    "images/images (213).png",
    "images/images (214).png",
    "images/images (215).png",
    "images/images (216).png",
    "images/images (217).png",
    "images/images (218).png",
    "images/images (219).png",
    "images/images (220).png",
    "images/images (221).png",
    "images/images (222).png",
    "images/images (223).png",
    "images/images (224).png",
    "images/images (225).png",
    "images/images (226).png",
    "images/images (227).png",
    "images/images (228).png",
    "images/images (229).png",
    "images/images (230).png",
    "images/images (231).png",
    "images/images (232).png",
    "images/images (233).png",
    "images/images (234).png",
    "images/images (235).png",
    "images/images (236).png",
    "images/images (237).png",
    "images/images (238).png",
    "images/images (239).png",
    "images/images (240).png",
    "images/images (241).png",
    "images/images (242).png",
    "images/images (243).png",
    "images/images (244).png",
    "images/images (245).png",
    "images/images (246).png",
    "images/images (247).png",
    "images/images (248).png",
    "images/images (249).png",
    "images/images (250).png"
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
