/**
 * 
 * lâmpada
 */

function on (params) {
    document.getElementById("lamp"). src = "on.jpg";
    
}

function off (params) {
    document.getElementById("lamp"). src = "off.jpg";
    
}
function blink (params) {
    var intervalo = 0;
    var contador = 0;
    while (contador < 20) {
        intervalo += 200;
        setTimeout ("document.getElementById ('lamp').src='on.jpg';" , intervalo);
        intervalo +=200;
        setTimeout ("document.getElementById ('lamp').src='off.jpg';" , intervalo);
        contador ++;
    }
    
}