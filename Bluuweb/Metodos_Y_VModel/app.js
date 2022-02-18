const app = new Vue({
    el:"#app",
    data: {
        frutas: [
            {nombre: "Pera", cantidad: 10},
            {nombre: "Mango", cantidad: 20},
            {nombre: "Plátano", cantidad: 30}
        ],
        nuevaFruta: ""
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
    }
})