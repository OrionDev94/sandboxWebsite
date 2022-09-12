"use strict";


//Funktionen mit Parametern:
//Die Parameter werden in den Klammern einer Funktion gesetzt: funtion(x, y){};
//Mit globaeln Variablen (s. unten) kann man diese "definieren"  ^^

function sum(a, b) {
    var result = a + b;
    return result;

}

//Es wird immer die größte Zahl ausgegeben
function max2(x, y) {

    var z = x-y;

    if (z >= 0) {
        return x;
    }

    else if (z < 0) {
        return y;
    }
}

//Es wird immer die größte Zahl ausgegeben
function max3(x, y, z) {
    if (x >= y && x >= z) {
        return x;
    }

    else if (y >= x && y >= z) {
        return y;
    }

    else if (z >= x && z >= y) {
        return z;
    }

}

//Fakultät "for" Schleife
function factorial(n) {
    var result = 1;
    for (var i =1; i <= n; i++) {
        result = result * i;
    }
    return result;

}
// Beispiel "for" Schleife
for (var i=1; i<=10; i++) {
    // console.log(i);
}


var max = 28;
var min = 19;

var x = 12;
var y = 5;
var z = 50;
var c = sum(x, y);
var d = max2(max, min); // max2 Parametern erhalten die Werte der Variablen max und min also: max2(28, 19);
var e = max3(max, min, z);
var f = factorial();
// console.log(d);
// console.log(e);


