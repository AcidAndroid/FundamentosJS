const nacimiento = new Date(1985, 7 - 1, 22);
const dias = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado"

]
const hoy = new Date();

const transcurrido = hoy - nacimiento;
const tiemposeg = transcurrido / 1000
const tiempomin = tiemposeg / 60
const tiempohor = tiempomin / 60
const tiempodias = tiempohor / 24
const tiempoyear = tiempodias / 365

//Se calcula que dia cae el cumpleaños
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(dias[proximo.getDay()])