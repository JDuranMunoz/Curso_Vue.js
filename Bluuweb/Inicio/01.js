const app = new Vue({
    el: "#app",
    data: {
        titulo: "Hola mundo con Vue",
        frutas: ["Manzana", "Fresa", "Plátano"],
        frutas2: [
            {nombre: "Manzana", cantidad: 10},
            {nombre: "Fresa", cantidad: 0},
            {nombre: "Plátano", cantidad: 30}
        ]
    }
})