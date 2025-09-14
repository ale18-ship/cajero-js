const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let saldo = 1000.0;

let movimientos = [];

function formatoDinero(n) {
  return Number(n).toFixed(2);
}

function mostrarMenu() {
  console.log("\n===============================");
  console.log("💵  Bienvenido al cajero automático");
  console.log("1. Consultar saldo");
  console.log("2. Depositar dinero");
  console.log("3. Retirar dinero");
  console.log("4. Ver movimientos");
  console.log("5. Salir");
  console.log("===============================\n");

  rl.question("Selecciona una opción: ", (opcion) => {
    manejarOpcion(opcion.trim());
  });
}

function manejarOpcion(opcion) {
  switch (opcion) {
    case "1":
      consultarSaldo();
      break;
    case "2":
      depositarDinero();
      break;
    case "3":
      retirarDinero();
      break;
    case "4":
      verMovimientos();
      break;
    case "5":
      console.log("👋 Gracias por usar el cajero. ¡Hasta luego!");
      rl.close();
      break;
    default:
      console.log("❌ Opción no válida, intenta de nuevo.");
      mostrarMenu();
      break;
  }
}

function consultarSaldo() {
  console.log(`\n📊 Tu saldo actual es: $${formatoDinero(saldo)}\n`);
  mostrarMenu();
}

function depositarDinero() {
  rl.question("💰 Ingresa el monto a depositar: ", (monto) => {
    const cantidad = parseFloat(monto.replace(",", "."));
    if (isNaN(cantidad) || cantidad <= 0) {
      console.log("❌ Monto inválido, intenta de nuevo.");
    } else {
      saldo += cantidad;
      movimientos.push({
        tipo: "Depósito",
        monto: Number(cantidad),
        fecha: new Date().toISOString(),
      });
      console.log(`✅ Depósito exitoso. Nuevo saldo: $${formatoDinero(saldo)}`);
    }
    mostrarMenu();
  });
}

function retirarDinero() {
  rl.question("💸 Ingresa el monto a retirar: ", (monto) => {
    const cantidad = parseFloat(monto.replace(",", "."));
    if (isNaN(cantidad) || cantidad <= 0) {
      console.log("❌ Monto inválido, intenta de nuevo.");
      mostrarMenu();
      return;
    }
    if (cantidad > saldo) {
      console.log("⚠️ Fondos insuficientes.");
      mostrarMenu();
      return;
    }
    saldo -= cantidad;
    movimientos.push({
      tipo: "Retiro",
      monto: Number(cantidad),
      fecha: new Date().toISOString(),
    });
    console.log(`✅ Retiro exitoso. Nuevo saldo: $${formatoDinero(saldo)}`);
    mostrarMenu();
  });
}

function verMovimientos() {
  console.log("\n📒 Historial de movimientos:");
  if (movimientos.length === 0) {
    console.log("No tienes movimientos aún.");
  } else {
    movimientos.forEach((m, i) => {
      const fecha = new Date(m.fecha).toLocaleString();
      const signo = m.tipo === "Depósito" ? "+" : "-";
      console.log(
        `${i + 1}. [${fecha}] ${m.tipo}: ${signo}$${formatoDinero(m.monto)}`
      );
    });
  }
  mostrarMenu();
}

rl.on("SIGINT", () => {
  console.log("\n👋 Saliendo...");
  rl.close();
});

mostrarMenu();