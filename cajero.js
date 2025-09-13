const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let saldo = 1000;

function mostrarMenu() {
  console.log("\n💵 Bienvenido al cajero automático");
  console.log("1. Consultar saldo");
  console.log("2. Depositar dinero");
  console.log("3. Retirar dinero");
  console.log("4. Salir");

  rl.question("Selecciona una opción: ", (opcion) => {
    manejarOpcion(opcion);
  });
}

function manejarOpcion(opcion) {
  switch (opcion) {
    case "1":
      console.log(`📊 Tu saldo actual es: $${saldo}`);
      mostrarMenu();
      break;
    case "2":
      console.log("Función de depósito en construcción");
      mostrarMenu();
      break;
    case "3":
      console.log("Función de retiro en construcción");
      mostrarMenu();
      break;
    case "4":
      console.log("👋 Gracias por usar el cajero. ¡Hasta luego!");
      rl.close();
      break;
    default:
      console.log("❌ Opción no válida, intenta de nuevo.");
      mostrarMenu();
      break;
  }
}

mostrarMenu();