<template>
    <div class="d-grid gap-2">
        <ul class="list-group">
            <li v-for="(item, index) of arrayOrdenado" :key="item.id" v-on:click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
                {{item.nombre}}
                <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-danger" v-on:click="reiniciar">Reiniciar cantidades</button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "ListaC",
        computed: {
            ...mapState(["frutas"]),

            arrayOrdenado() {
                let frutas = this.frutas;
                return frutas.sort( (a, b) => b.cantidad - a.cantidad );
            }
        },
        methods: {
            ...mapMutations(["aumentar", "reiniciar"])
        }
    }
</script>