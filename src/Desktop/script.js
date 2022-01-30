var root = document.documentElement;

// Random background color
function randomColor() {
    var color = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + color;
    root.style.setProperty('--BackgroundColor', color);
}

// Copy background color (Electron)
function getColor() {
    var content = root.style.getPropertyValue('--BackgroundColor').toUpperCase();
    content = content.replace('#', ''); // Remove hashtag
    fetch('http://localhost:3000/?color='+content).then(
        alert('Copied '+'#' +content+' to clipboard!')
    );
}

