document.getElementById("click-me").onclick = function() {
    // Generate random color
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    // Set background color
    document.body.style.backgroundColor = randomColor;
    
    // Display color code
    document.getElementById("color-code").textContent = "Color Code: " + randomColor.toUpperCase();
};
