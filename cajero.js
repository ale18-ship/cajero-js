const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("💵 Bienvenido al cajero automático");
console.log("1. Consultar saldo");
console.log("2. Depositar dinero");
console.log("3. Retirar dinero");
console.log("4. Salir");

rl.question("👉 Selecciona una opción: ", (opcion) => {
  console.log(`Elegiste la opción: ${opcion}`);
  rl.close();
});
