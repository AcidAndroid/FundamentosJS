//funcion con parametros multiples indefinidos
//los ...[nombres] es el spread operator y recibe paramatros como un array
function suma(...numeros) {

    // let acum = 0
    // for (let index = 0; index < numeros.length; index++) {
    //     acum += numeros[index];

    // }
    //metodo reduce hace que por cada elemento del array acumula un valor en una vriable
    return numeros.reduce(function(acum, numero) {
        acum += numero
        return acum
    }, 0)
}

//de nuevo ...Ñ[nombre] es para parametros multiples
//la funcion map es como un for pero dentro de los arreglos. NO NECESITA RETURN LAS ARROW FUNTION
const dobles = (...numeros) => numeros.map(numero => numero * 2)

//el metodo filter sirve para buscar numero que cumplan una condicion. NO NECESITA RETURN LAS ARROW FUNTION
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)


suma(10, 2, 8, 9, 6, 25, 784)
pares(10, 2, 8, 9, 6, 25, 784)
dobles(10, 2, 8, 9, 6, 25, 784)