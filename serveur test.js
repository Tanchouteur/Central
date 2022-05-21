const express = require('express');
const app = express();
const port = 80;
const ip = '172.20.10.4';

const version = 'Vtest 1.1.1'; const author = 'Louis';

const SerialPort = require("serialport").SerialPort;

const fs = require('fs').promises;

var arduinoCOMPort = "COM4";

/*const serialport =new SerialPort({ path: arduinoCOMPort, baudRate: 115200 })

serialport.on('open',function() {
    console.log(`Serial Port \x1b[32m ${arduinoCOMPort}\x1b[0m ouvert`);
});*/

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
            console.log(`Envoyer au port série : `+paramA+sujet+color);
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
    console.log(`\x1b[36m === Developeur : \x1b[1m${author} \x1b[0m\x1b[36m ===  Version du programme : \x1b[1m${version} \x1b[0m\x1b[36m===`);
    console.log(``);
    
    console.log(`\x1b[34m ==================================================`);
    
    console.log(``);
    console.log(`\x1b[32m === Centrale domotique à l'écoute sur \x1b[1m\x1b[33m\x1b[4m${ip}:${port} \x1b[0m\x1b[32m===`);
});
