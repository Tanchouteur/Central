
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

const serialport = new SerialPort({ path: 'COM3', baudRate: 9600 });



serialport.on('open',function() {
    console.log('Serial Port  connecté.');
});
