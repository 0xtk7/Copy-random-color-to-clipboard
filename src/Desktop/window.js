const {app, BrowserWindow, clipboard} = require('electron');
const fs = require('fs');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.setMenuBarVisibility(false);
    win.loadFile('../Desktop/index.html');
}

app.whenReady().then(() => {
    createWindow();
});

// Write to clipboard
//clipboard.writeText(color);
//console.log(color);
