const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const environment = {
  mainWindow:{
    width: 232,
    height: 430
  },
  secondWindow:{
    width: 500,
    height: 500
  },
  transparent: true
};

//The main window
let win; 

//The window to show the image
let win2;

function createWindow() {
  // Create the browser window.

  let display = screen.getPrimaryDisplay();

  console.log(display.bounds);

  win2 = new BrowserWindow({
    width: environment.secondWindow.width,
    height: environment.secondWindow.height,
    frame: !environment.transparent,
    transparent: environment.transparent,
    zoomToPageWidth: true,
    // useContentSize: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
    show: false
  });

  win2.loadURL(
    isDev
    ? `file://${path.join(__dirname, '../public/view.html')}`
    : `file://${path.join(__dirname, '../build/view.html')}`);

  win2.on('closed', () => (win = null));

  const win2Position = win2.getPosition();
  const win2Size = win2.getSize();

  const x = win2Position[0]+win2Size[0];
  const y = win2Position[1]-65;

  win = new BrowserWindow({
    width: environment.mainWindow.width,
    height: environment.mainWindow.height,
    x: x,
    y: y,
    frame: !environment.transparent,
    transparent: environment.transparent,
    zoomToPageWidth: true,
    // useContentSize: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    console.log('This is development version');
  } else {
    console.log('This is production version');
  }

  // and load the index.html of the app.
  // win.loadFile('build/index.html')
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  win.on('closed', () => (win = null));

  win.on('resize', () => {
    console.log('win on resize:',win.getSize());
    console.log('win on position:',win.getPosition());
  })
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

ipcMain.on('show-image', (event, ...args) => {
  win2.showInactive();
  win2.webContents.send('action-update-image', args);
});

ipcMain.on('close-image', (event) => {
  win2.hide();
});
