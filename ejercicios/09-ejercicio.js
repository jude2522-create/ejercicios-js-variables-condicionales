const frase = prompt("Ingresá una frase:").toLowerCase();
let vocales = "";

if (frase.indexOf("a") !== -1) vocales += "a";
if (frase.indexOf("e") !== -1) vocales += "e";
if (frase.indexOf("i") !== -1) vocales += "i";
if (frase.indexOf("o") !== -1) vocales += "o";
if (frase.indexOf("u") !== -1) vocales += "u";

document.write(vocales);