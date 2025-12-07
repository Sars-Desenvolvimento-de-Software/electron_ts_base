import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let win: BrowserWindow;

async function TelaApresentacao() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload/preload.mjs')
    },
    autoHideMenuBar:true
  });

  if (!app.isPackaged) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, 'pages/index.html'));
  }
}

app.whenReady().then(TelaApresentacao);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});