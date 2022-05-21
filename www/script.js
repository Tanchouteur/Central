
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

var colorled;
let paramA='';

var lamp = 0;
var tv =0;
var serveur = 0;
var nas = 0;

var ip = "192.168.1.17";
var port = '80';


document.onclick= function(event) {
    // l'evenement permet de détecter sur quel composant le clic est passé
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

    if (target.className ==="button"||target.className ==="color1"||target.className ==="color2"){

        if (target.className==="color1"||target.className==="color2"){

            switch (target.id){
                case 'blue':
                    colorled = 'bleu';
                    break;
                case 'red':
                    colorled = 'rouge';
                    break;
                case 'green':
                    colorled = 'vert';
                    break;
                case 'yellow':
                    colorled = 'jaune';
                    break;
                case 'deepskyblue':
                    colorled = 'turquoise';
                    break;
                case 'pink':
                    colorled = 'rose';
                    break;
                case 'white':
                    colorled = 'blanc';
                    break;
                case 'black':
                    colorled = 'noir';
                    break;

            }//translate color


            if (target.className==="color1"){
                document.getElementById("bureau").style.color = target.id;
                httpGetAsync(`http://${ip}:${port}/value?sujet=led1&color=${colorled}&paramA=run`);

            }
            if (target.className==="color2"){
                document.getElementById("simu").style.color = target.id;
                httpGetAsync(`http://${ip}:${port}/value?sujet=led2&color=${colorled}&paramA=run`);

            }
        }else {

            switch (target.id) {


                case 'lamp':
                    if (lamp === "0") {
                        lamp = "1";
                        document.getElementById(target.id).style.transform = "scale(1.2)";
                        paramA = "run";
                    } else {
                        lamp = "0";
                        document.getElementById(target.id).style.transform = "";
                        paramA = "stop";
                    }

                    httpGetAsync(`http://${ip}:${port}/value?sujet=lamp&paramA=` + paramA);
                    break;

                case 'tv':
                    if (tv === 0) {
                        tv = 1;
                        document.getElementById(target.id).style.transform = "scale(1.2)";
                        paramA = "run";
                    } else {
                        tv = 0;
                        document.getElementById(target.id).style.transform = "";
                        paramA = "stop";
                    }

                    httpGetAsync(`http://${ip}:${port}/value?sujet=tv&paramA=` + paramA);
                    break;

                case 'serveur':
                    if (serveur === 0) {
                        serveur = 1;
                        document.getElementById(target.id).style.transform = "scale(1.2)";
                        paramA = "run";
                    } else {
                        serveur = 0;
                        document.getElementById(target.id).style.transform = "";
                        paramA = "stop";
                    }

                    httpGetAsync(`http://${ip}:${port}/value?sujet=serveur&paramA=` + paramA);
                    break;

                case 'nas':
                    if (nas === 0) {
                        nas = 1;
                        document.getElementById(target.id).style.transform = "scale(1.2)";
                        paramA = "run";
                    } else {
                        nas = 0;
                        document.getElementById(target.id).style.transform = "";

                        paramA = "stop";
                    }

                    httpGetAsync(`http://${ip}:${port}/value?sujet=nas&paramA=` + paramA);
                    break;
                
                    case 'pc':
                        if (nas === 0) {
                            nas = 1;
                            document.getElementById(target.id).style.transform = "scale(1.2)";
                            paramA = "run";
                        } else {
                            nas = 0;
                            document.getElementById(target.id).style.transform = "";
    
                            paramA = "stop";
                        }
    
                        httpGetAsync(`http://${ip}:${port}/value?sujet=pc&paramA=` + paramA);
                        break;
            }


        }

    }

};