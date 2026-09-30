const prompt = require('prompt-sync')();

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir entre cero";
  }
  return a / b;
}

function procesarCalculo(numero1, operacion, numero2) {
  if (operacion === "+") {
    return sumar(numero1, numero2);
  } else if (operacion === "-") {
    return restar(numero1, numero2);
  } else if (operacion === "*") {
    return multiplicar(numero1, numero2);
  } else if (operacion === "/") {
    return dividir(numero1, numero2);
  } else {
    return "Operación no válida";
  }
}

function iniciarCajero() {
  let activo = true;
  let contadorOperaciones = 0;

  console.log("=== BIENVENIDO AL MINI CAJERO ===");

  while (activo) {
    let numero1 = Number(prompt("Ingresa el primer número: "));
    let operacion = prompt("Ingresa la operación (+, -, *, /): ");
    let numero2 = Number(prompt("Ingresa el segundo número: "));

    let resultado = procesarCalculo(numero1, operacion, numero2);

    console.log("-----------------------------------");
    console.log("Resultado: " + resultado);
    console.log("-----------------------------------\n");

    if (resultado !== "Operación no válida") {
      contadorOperaciones = contadorOperaciones + 1;
    }

    let respuesta = prompt("¿Deseas hacer otra operación? (si/no): ");

    if (respuesta === "no") {
      activo = false;
    }
  }

  console.log("\nSesión cerrada. ¡Hasta luego!");
  console.log("Operaciones realizadas en esta sesión: " + contadorOperaciones);
}


iniciarCajero();