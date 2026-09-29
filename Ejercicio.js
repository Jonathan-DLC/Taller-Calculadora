const prompt = require('prompt-sync')();

let activo = true;

let contadorOperaciones = 0;

console.log("=== BIENVENIDO AL MINI CAJERO ===");

while (activo) {

  let numero1 = Number(prompt("Ingresa el primer número: "));
  let operacion = prompt("Ingresa la operación (+, -, *, /): ");
  let numero2 = Number(prompt("Ingresa el segundo número: "));

  let resultado;

  if (operacion === "+") {
    resultado = numero1 + numero2;
  } else if (operacion === "-") {
    resultado = numero1 - numero2;
  } else if (operacion === "*") {
    resultado = numero1 * numero2;
  } else if (operacion === "/") {
    
    if (numero2 === 0) {
      resultado = "Error: No se puede dividir entre cero";
    } else {
      resultado = numero1 / numero2;
    }
  } else {
    
    resultado = "Operación no válida";
  }

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