const { app, BrowserWindow, Notification, ipcMain, session } = require('electron')
const path = require('path')
const url = require('url')

//////////////////////////// THE WINDOW
const startUrl = process.env.ELECTRON_START_URL || url.format({
  pathname: path.join(__dirname, '/../build/index.html'),
  protocol: 'file:',
  slashes: true
});


app.on('ready', () => {
  let loading = new BrowserWindow({  /// SPLASH SCREEN
    show: false,
    frame: false,
    transparent: true,
    icon: './build/icon.ico',
    webPreferences: {
      preload: '.build/preload.js',
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  loading.once('show', () => {
    main = new BrowserWindow({          /// MAIN WINDOW
      frame: true,
      show: false,
      transparent: true,
      
      setResizable:true,
      icon: './build/icon.ico',
      webPreferences: {
        preload: '.build/preload.js',
        nodeIntegration: true,
        contextIsolation: false
      }
    })
    main.on('ready-to-show', () => {
      main.show()
      loading.hide()
      main.webContents.openDevTools()
    })
    setTimeout(async () => { main.loadURL(startUrl) }, 2000) // SPLASH SCREEN TIMEOUT
  })
  loading.loadURL(path.join(__dirname, '/loading.html'))
  loading.show()






})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


