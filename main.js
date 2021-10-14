export const init = (electron) => {
  const createBrowserWindow = () => {
    const browserWindow = new electron.BrowserWindow()

    browserWindow.loadURL('https://google.com')

    return browserWindow
  }

  electron.app.whenReady().then(() => {
    createBrowserWindow()

    electron.app.on('activate', function () {
      if (electron.BrowserWindow.getAllWindows().length === 0) {
        createBrowserWindow()
      }
    })
  })

  electron.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      console.log('all closed')
      electron.app.quit()
    }
  })
}
