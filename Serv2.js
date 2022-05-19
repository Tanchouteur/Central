
const http = require("http");
const fs = require('fs').promises;
const URL = require('url');

const BASE = 'http://localhost/';

// création du serveur
const server = http.createServer(
    (request, response) => {
        // les objets URL permettent de manipuler l'url de la requête
        const url = new URL(request.url, BASE);              // new URL(request.url, `http://${request.headers.host}`);
        const path = url.pathname;
        // gestion de la présence d'un paramètre 'name'
        const nameValue = url.searchParams.get('name') || 'unknown';

        // création et envoi de la réponse
        response.statusCode = 200;
        response.setHeader( 'Content-Type' , 'text/html');

        response.write('<h1>Second node server</h1>');
        response.write(`<p style="background-color:#CCC">L'url de la requête est <strong>${request.url}</strong>,
                          son chemin est <em>${path}</em>.</p>`);
        response.write(`<p>hello ${nameValue} </p>`);

        response.end();
    }
);

server.listen(8080);           // démarrage du serveur au port 8080