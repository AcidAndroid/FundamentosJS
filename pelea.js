let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

let round = 1;



while (ambosSiguenVivos()) {


    console.log(`Round ${round}`);

    const golpeGoku = calcularGolpe()
    const golpeSuperman = calcularGolpe()

    console.log(`Goku golpea con ${golpeGoku} puntos de fuerza`);
    console.log(`Superman golpea con ${golpeSuperman} puntos de fuerza`);

    vidaGoku -= golpeSuperman;
    vidaSuperman -= golpeGoku;

    console.log(`Goku queda con ${vidaGoku} puntos de vida`);
    console.log(`Superman queda con ${vidaSuperman} puntos de vida`);

    round++;
}

if (vidaGoku > vidaSuperman) {

    console.log('Gana Goku!!');

} else {
    console.log('Gana Superman!!!');
}