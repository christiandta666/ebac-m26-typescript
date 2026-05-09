"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = nacimiento.getMonth();
    const diaNacimiento = nacimiento.getDate();
    if (mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    return edad;
}
const fecha1 = "2000-05-10";
const fecha2 = "1995-12-25";
const fecha3 = "2010-01-01";
console.log(`Edad 1: ${calcularEdad(fecha1)} años`);
console.log(`Edad 2: ${calcularEdad(fecha2)} años`);
console.log(`Edad 3: ${calcularEdad(fecha3)} años`);
//# sourceMappingURL=app.js.map