const app = new Vue({
    el:"#app",
    data: {
        frutas: [
            {nombre: "Pera", cantidad: 10},
            {nombre: "Mango", cantidad: 20},
            {nombre: "Plátano", cantidad: 30}
        ],
        nuevaFruta: "",
        total: 0
    },
    methods: {
        agregarFruta() {
            // this es para acceder a los elementos de data
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            });
            this.nuevaFruta = "";
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for(frutaFor of this.frutas) {
                this.total = this.total + frutaFor.cantidad;
            }
            return this.total;
        }
    }
})