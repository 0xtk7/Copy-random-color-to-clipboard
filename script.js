var root = document.documentElement;

// Random background color
function randomColor(color) {
    var color = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + color;
    root.style.setProperty('--BackgroundColor', color);
}


// copy background color
function getColor() {
    var content = root.style.getPropertyValue('--BackgroundColor').toUpperCase();
    navigator.clipboard.writeText(content);
    alert('Copied '+content+' to clipboard!');
}


