const num = parseInt(prompt("Ingresá un número:"));
let mensaje = "El " + num + " es divisible por ";
let divisibles = "";

if (num % 2 === 0) divisibles += "2, ";
if (num % 3 === 0) divisibles += "3, ";
if (num % 5 === 0) divisibles += "5, ";
if (num % 7 === 0) divisibles += "7, ";

if (divisibles === "") {
    document.write("El " + num + " no es divisible por 2, 3, 5 ni 7.");
} else {
    document.write(mensaje + divisibles.slice(0, -2) + ".");
}