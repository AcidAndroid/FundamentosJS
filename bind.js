class Toggable {
    constructor(el) {
        // inicializar el estado interno
        this.el = el
        this.el.innerHTML = 'Off'
        this.activated = false
            //this.onClick = this.onClick.bind(this)
            //El método bind devuelve otra función que asigna el this a lo que nosotros le pasamos como parametro
        this.el.addEventListener('click', this.onClick.bind(this))
    }

    onClick(ev) {
        this.activated = !this.activated
        this.toggleText()
    }

    toggleText() {
        this.el.innerHTML = this.activated ? 'On' : 'Off'
    }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)