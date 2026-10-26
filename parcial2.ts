// ==========================================
// 1. ORGANIZA LOS DATOS
// ==========================================

interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string; 
}

let reservaciones: Reservacion[] = [
    { id: 1, cliente: "Carlos Pérez", personas: 6, zona: "Terraza" },
    { id: 2, cliente: "Ana Gómez", personas: 3, zona: "Interior" },
    { id: 3, cliente: "Luis Martínez", personas: 5, zona: "Terraza" },
    { id: 4, cliente: "Sofía Rodríguez", personas: 2, zona: "Interior" }
];

console.log("=== 1. DATOS INICIALES ===");
console.log(reservaciones);


// ==========================================
// 2. REGISTRA NUEVAS RESERVACIONES
// ==========================================

const nuevaNormal: Reservacion = { id: 5, cliente: "Jorge Benítez", personas: 4, zona: "Interior" };
reservaciones.push(nuevaNormal);

const nuevaPrioritaria: Reservacion = { id: 6, cliente: "María Torres", personas: 2, zona: "Terraza" };
reservaciones.unshift(nuevaPrioritaria);

console.log("\n=== 2. DESPUÉS DE REGISTRAR NUEVAS ===");
console.log("Lista antes de atender (orden comprobado):", reservaciones);


// ==========================================
// 3. ATIENDE UNA RESERVACIÓN
// ==========================================

console.log("\n=== 3. ATENDER RESERVACIÓN ===");
const atendida = reservaciones.shift(); 

if (atendida) {
    console.log(`Cliente atendido: ${atendida.cliente} | Cantidad de personas: ${atendida.personas}`);
} else {
    console.log("La lista de reservaciones está vacía.");
}


// ==========================================
// 4. BUSCA Y CONSULTA
// ==========================================

console.log("\n=== 4. BÚSQUEDA Y CONSULTA ===");

function buscarPorId(lista: Reservacion[], idBuscado: number): void {
    const encontrada = lista.find(r => r.id === idBuscado);
    if (encontrada) {
        console.log(`[Búsqueda ID ${idBuscado}] Encontrada:`, encontrada);
    } else {
        console.log(`[Búsqueda ID ${idBuscado}] No existe ninguna reservación con ese identificador.`);
    }
}

buscarPorId(reservaciones, 3);
buscarPorId(reservaciones, 99);

const cantidadOriginalAntesFiltro = reservaciones.length;

const filtradasTerrazaGrande = reservaciones.filter(r => r.zona === "Terraza" && r.personas >= 5);

console.log("\n--- Resultado del Filtro (Terraza y >= 5 personas) ---");
if (filtradasTerrazaGrande.length > 0) {
    console.log(filtradasTerrazaGrande);
} else {
    console.log("No hay coincidencias para el filtro aplicado.");
}


// ==========================================
// 5. INTEGRA UNA FUNCIÓN TIPADA
// ==========================================

function mostrarResumenEstado(lista: Reservacion[]): void {
    console.log(`\n--- Resumen de Estado ---`);
    console.log(`Total de reservaciones en la lista: ${lista.length}`);
    lista.forEach(r => {
        console.log(`- [ID: ${r.id}] Cliente: ${r.cliente}, Personas: ${r.personas}, Zona: ${r.zona}`);
    });
}

mostrarResumenEstado(reservaciones);
mostrarResumenEstado([
    { id: 100, cliente: "Prueba Vacía / Alternativa", personas: 1, zona: "Interior" }
]);


// ==========================================
// 6. COMPRUEBA EL ESTADO FINAL
// ==========================================

console.log("\n=== 6. COMPROBACIÓN DEL ESTADO FINAL ===");
console.log(`Reservaciones pendientes actuales (.length): ${reservaciones.length}`);
console.log(`Cantidad de coincidencias producidas por el filtro: ${filtradasTerrazaGrande.length}`);

const cantidadOriginalDespuesFiltro = reservaciones.length;
console.log(`Cantidad del arreglo original antes del filtro: ${cantidadOriginalAntesFiltro}`);
console.log(`Cantidad del arreglo original después del filtro: ${cantidadOriginalDespuesFiltro}`);
console.log(`¿El método filter eliminó registros del arreglo original?: ${cantidadOriginalAntesFiltro !== cantidadOriginalDespuesFiltro ? "Sí" : "No (El arreglo original se mantiene intacto)"}`);