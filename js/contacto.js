// Página de Contacto
window.onload = function() {
    var elementos = document.forms[0].elements;
    for (i = 0; i < elementos.length; i++) {
        elementos[i].onkeypress = selector;
    }
}

function selector(event) {
    switch (this.name) {

        case 'name':
            return restringir(event, 1);
            break;
        case 'email':
            return restringir(event, 4);
            break;
        case 'phone':
            return restringir(event, 2);
            break;
        case 'subject':
            return restringir(event, 3);
            break;
    }
}

function restringir(event, opc) {
    var caracteres = "abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÚÓÚ"
    var numeros = "0123456789";
    var alfanumerico = caracteres + numeros;
    var especiales = "@.-_*";
    var alfanumericoEspeciales = alfanumerico + especiales;
    var permitidos = "";

    switch (opc) {
        case 1:
            permitidos = caracteres;
            break;
        case 2:
            permitidos = numeros;
            break;
        case 3:
            permitidos = alfanumerico;
            break;
        case 4:
            permitidos = alfanumericoEspeciales;
            break;
    }

    var codigoPresionado = event.charCode || event.keyCode;
    var caracter = String.fromCharCode(codigoPresionado);

    if (permitidos.indexOf(caracter) != -1) {
        return true;
    } else {
        return false;
    }
}