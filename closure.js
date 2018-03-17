function saludarFamilia(apellido) {
    return function saludarMiembroDeFamilia(nombre) {
        //Los closure es tener acceso a variables que estan arriba en declaracion
        //en este caso  ${apellido} fue declarado en otra funcion que llamo a otra
        //funcion que es la que usa la variable  ${apellido}
        console.log(`Hola ${nombre} ${apellido}`)
    }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Mónica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")

saludarRomero("Jorge")