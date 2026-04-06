const num1 = parseInt(prompt("Ingresá el primer número:"));
const num2 = parseInt(prompt("Ingresá el segundo número:"));
const num3 = parseInt(prompt("Ingresá el tercer número:"));

if (num1 > num2 && num1 > num3) {
    document.write("El " + num1 + " es el número más grande");
} else if (num2 > num1 && num2 > num3) {
    document.write("El " + num2 + " es el número más grande");
} else {
    document.write("El " + num3 + " es el número más grande");
}