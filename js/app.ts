
function calcularEdad(fechaNacimiento: string): number {
    const nacimiento: Date = new Date(fechaNacimiento);  
    const hoy: Date = new Date();  
    let edad: number = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual: number = hoy.getMonth();
    const diaActual: number = hoy.getDate();
    const mesNacimiento: number = nacimiento.getMonth();
    const diaNacimiento: number = nacimiento.getDate();

    if (
        mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
        edad--;
    }

    return edad;
}


const fecha1: string = "2000-05-10";
const fecha2: string = "1995-12-25";
const fecha3: string = "2010-01-01";

console.log(`Edad 1: ${calcularEdad(fecha1)} años`);
console.log(`Edad 2: ${calcularEdad(fecha2)} años`);
console.log(`Edad 3: ${calcularEdad(fecha3)} años`);