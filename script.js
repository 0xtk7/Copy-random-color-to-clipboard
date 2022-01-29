var root = document.documentElement;

// Random background color
function randomColor(color) {
    var color = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + color;
    if (color == '#181818') {
        root.style.setProperty('--ButtonColor', '#ffffff');
        root.style.setProperty('--TextColor', '#181818')
    }
    root.style.setProperty('--BackgroundColor', color);
}


// copy background color
function getColor() {
    var content = root.style.getPropertyValue('--BackgroundColor').toUpperCase();
    navigator.clipboard.writeText(content);
    alert('Copied '+content+' to clipboard!');
}

// Check for mobile
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    alert('Mobile detected');
}else{
    return;
}

