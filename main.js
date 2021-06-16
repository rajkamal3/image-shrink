const { app, BrowserWindow, BrowserView } = require('electron');

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'Image Shrink',
        width: 500,
        height: 600,
        icon: './assets/icons/Icon_256x256.png'
    });

    // mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    mainWindow.loadFile('./app/index.html');
}

app.on('ready', createMainWindow);