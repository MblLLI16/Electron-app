//const { app } = require('electron');
//const ffi = require('ffi');
//const ref = require('ref');

// // Загрузка user32.dll
// const user32 = ffi.Library('user32', {
//   'EnumWindows': ['bool', ['pointer', 'int32']],
//   'GetWindowTextA': ['int', ['long', 'string', 'int']],
// });

// app.on('ready', () => {
//   // Обратный вызов для перебора окон
//   const enumWindowsCallback = ffi.Callback('bool', ['long', 'long'], (hwnd, lParam) => {
//     const buf = Buffer.alloc(255);
//     user32.GetWindowTextA(hwnd, buf, 255); // Получение заголовка окна
//     console.log(buf.toString());
//     return true; // Продолжение перебора окон
//   });

//   // Использование Windows API для перебора окон
//   user32.EnumWindows(enumWindowsCallback, 0);
// });


console.log('Hello?');