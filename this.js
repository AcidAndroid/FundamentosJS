//Existen diferentes formas de usar this en diferentes scopes segun las funciones
class Persona {
    constructor(nombre, amigos = []) {
            this.nombre = nombre
            this.amigos = amigos
        }
        //Esta es la manra correcta y nueva de usar this, las arrow function tienen el contexto predecesor
    listarAmigosArrow() {
        this.amigos.forEach(element => {
            console.log(`Me llamo ${this.nombre} y soy amigo de ${element}`);
        });
    }

    //Se forza el contexto predecesor con bind
    listarAmigosBind() {
        this.amigos.forEach(function(element) {
            console.log(`Me llamo ${this.nombre} y soy amigo de ${element}`);
        }.bind(this));
    }

    //Se declara un this interno
    listarAmigosThis() {
        const _this = this
        this.amigos.forEach(function(element) {
            console.log(`Me llama ${_this.nombre}  y soy amigo de ${element}`)
        });
    }

}

const sacha = new Persona("Sacha", ["pedro", "juan", "pepe"])