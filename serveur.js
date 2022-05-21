const express = require('express');
const app = express();

const port = 80;
const ip = '192.168.1.17';

const version = '1.1.3'; const author = 'Louis';

const SerialPort = require("serialport").SerialPort;

const fs = require('fs').promises;

var arduinoCOMPort = "COM4";

const serialport =new SerialPort({ path: arduinoCOMPort, baudRate: 115200 })

serialport.on('open',function() {
    console.log(``);
    console.log(` === Serial Port \x1b[32m${Bright}${Underscore}${arduinoCOMPort}\x1b[0m ouvert ===`);
});

//Couleur
let Reset = "\x1b[0m"
let Bright = "\x1b[1m"
let Dim = "\x1b[2m"
let Underscore = "\x1b[4m"
let Blink = "\x1b[5m"
let Reverse = "\x1b[7m"
let Hidden = "\x1b[8m"

let FgBlack = "\x1b[30m"
let FgRed = "\x1b[31m"
let FgGreen = "\x1b[32m"
let FgYellow = "\x1b[33m"
let FgBlue = "\x1b[34m"
let FgMagenta = "\x1b[35m"
let FgCyan = "\x1b[36m"
let FgWhite = "\x1b[37m"

app.get('/', (req, res) => {
    fs.readFile(__dirname + "/www/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end("\x1b[31m"+err+"\x1b[0m");
            return;
        });

});

app.get('/value', (req, res) => {
    let sujet = ''; //pour eviter les undefined
    let color = ' ';
    let paramA = '';
    let paramB = '';
    sujet = req.param('sujet');
    color = req.param('color');
    paramA = req.param('paramA');
    paramB = req.param('paramB');

    if (sujet!==""){

        if (paramA && color){
            console.log(`Envoyer au port série : ${Bright}${FgGreen}${paramA}${FgYellow}${sujet}${FgCyan}${color}${Reset}`);
            serialport.write(paramA+sujet+color);
        }else if (paramA){
            console.log(`Envoyer au port série : \x1b[32m ${paramA}\x1b[33m${sujet} \x1b[0m`);
            serialport.write(paramA+sujet);
        }else {
            console.log("\x1b[31m Erreur dans le if '(sujet!=='')' \x1b[0m");
        }



    }
    res.send('');

});

app.get('/style', (req, res) => {
    fs.readFile(__dirname + "/www/style.css")
        .then(contents => {
            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end("\x1b[31m"+err+"\x1b[0m");
            return;
        });
});

app.get('/js', (req, res) => {
    fs.readFile(__dirname + "/www/script.js")
        .then(contents => {
            res.setHeader("Content-Type", "text/javaScript");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end("\x1b[31m"+err+"\x1b[0m");
            return;
        });
});

app.get('*', (req, res)=>{
    res.redirect('/')
});

app.listen(port, ip, () => {
    console.log(`${Reset} === Developeur :${FgCyan} \x1b[1m${author} ${Reset} ===  Version du programme : ${FgCyan}\x1b[1m${version} \x1b[0m===`);
    console.log(``);
    
    console.log(``);
    console.log(` === Centrale domotique à l'écoute sur \x1b[1m\x1b[33m\x1b[4m${ip}:${port}${Reset} ===`);

});
