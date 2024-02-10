var circle = document.getElementById("circle");
var appearButton = document.getElementById("appearButton");
var hideButton = document.getElementById("hideButton");

circle.addEventListener("click", function() {
    var colors = ["red", "blue", "green", "yellow"];
    var currentColor = this.style.backgroundColor;
    var currentIndex = colors.indexOf(currentColor);
    var nextIndex = (currentIndex + 1) % colors.length;
    this.style.backgroundColor = colors[nextIndex];
});

circle.addEventListener("mouseover", function() {
    var sizes = ["100px", "150px", "200px", "250px"];
    var currentSize = this.style.width;
    var currentIndex = sizes.indexOf(currentSize);
    var nextIndex = (currentIndex + 1) % sizes.length;
    this.style.width = sizes[nextIndex];
    this.style.height = sizes[nextIndex];
});

hideButton.addEventListener("click", function() {
    circle.style.display = "none";
    appearButton.style.display = "block";
});

// Appear
appearButton.addEventListener("click", function() {
    circle.style.display = "block";
    appearButton.style.display = "none";
});