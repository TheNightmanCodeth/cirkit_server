const electron = require('electron');
const app = electron.app;
const window = electron.BrowserWindow;
const url = require('url');
const path = require('path');
var server = require('./server.js');
var mainWin = null;

function makeWindow() {
    mainWin = new window({
        width: 450,
        height: 200
    });
    mainWin.loadURL(url.format({
        pathname: path.join(__dirname, 'ui/main.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWin.webContents.openDevTools();
    mainWin.on('closed', () => {
        mainWin = null
    });
    startServer();
}

function startServer() {
    server.start;
}

app.on('ready', makeWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        makeWindow()
    }
});
