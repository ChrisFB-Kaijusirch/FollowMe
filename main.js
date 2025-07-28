const { app } = require('electron')
const iohook = require('iohook')
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 9000 })
wss.on('connection', ws => console.log('Frontend connected'))

function broadcast(action, details) {
  const msg = JSON.stringify({ source:'scribe', action, details, timestamp: Date.now() })
  wss.clients.forEach(c => c.readyState === WebSocket.OPEN && c.send(msg))
}

app.whenReady().then(() => {
  iohook.on('keydown', e => broadcast('keydown', `keycode:${e.keycode}`))
  iohook.on('mouseclick', e => broadcast('click', `button:${e.button}`))
  iohook.start()
})
