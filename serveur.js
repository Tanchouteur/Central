const express = require('express');
const SerialPort = require("serialport").SerialPort;
const app = express();
const fs = require('fs').promises;
const port = 8000;

var arduinoCOMPort = "COM9";

const serialport =new SerialPort({ path: arduinoCOMPort, baudRate: 115200 })

serialport.on('open',function() {
    console.log('Serial Port ' + arduinoCOMPort + ' ouvert');
});

app.get('/', (req, res) => {
    fs.readFile(__dirname + "/www/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
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
            console.log(`Envoyer au port série : `+paramA+sujet);
            serialport.write(paramA+sujet);
        }else {
            console.log('error');
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
            res.end(err);
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
            res.end(err);
            return;
        });
});

app.listen(port, () => {
    console.log(`Centrale domotique à l'écoute sur le port ${port}!`)
});
