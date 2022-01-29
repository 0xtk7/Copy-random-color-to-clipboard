const {app, BrowserWindow, clipboard} = require('electron');

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

