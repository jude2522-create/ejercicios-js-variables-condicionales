const num1 = parseInt(prompt("Ingresá el primer número:"));
const num2 = parseInt(prompt("Ingresá el segundo número:"));

if (num1 > num2) {
    document.write("El " + num1 + " es el número más grande");
} else {
    document.write("El " + num2 + " es el número más grande");
}