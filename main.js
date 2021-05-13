// app 是管理应用程序生命周期用的
// BrowserWindow 是创建还有控制应用窗口用的 ..
const {
    app,
    BrowserWindow
} = require('electron')

const path = require('path')

// 自动重载应用
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

// 暂时设置成全局变量，防止垃圾回收
let win

// 定义事件
const createWindow = () => {
        win = new BrowserWindow({
            width: 960,
            height: 600,
            minWidth: 830,
            minHeight: 500,
            backgroundColor: '#f8f8f8'
        })
        win.loadURL(`file://${__dirname}/main.html`)
    }

// 绑定事件
app.on('ready', createWindow)