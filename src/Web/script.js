var root = document.documentElement;

// Random background color
function randomColor() {
    var color = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + color;
    root.style.setProperty('--BackgroundColor', color);
}

// Copy background color (Web)
function getColor() {
    var content = root.style.getPropertyValue('--BackgroundColor').toUpperCase();
    clipboard.writeText(content);
    alert('Copied '+content+' to clipboard!');
}


