const app = new Vue({
    el: "#app",
    data: {
        mensaje: "Propiedades computadas"
    },
    computed: {
        invertido() {
            return this.mensaje.split("").reverse().join("");
        }
    }
});