const dias = [
    "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"

]

const km = [10, 8, 9.9, 11, 9, 7, 8];

const nombre = "Kell";
let promedio = 0


for (let index = 0; index < dias.length; index++) {

    //console.log(dias[index]);
    console.log(`El Dia ${index} es el dia ${dias[index]}`);

    //promedio = promedio + km[index];
    promedio += Math.random() * 10 + 5;
    console.log(promedio);

}
console.log(`${nombre} corrio en promedio; ${ (promedio / dias.length ).toFixed(2)} km`);