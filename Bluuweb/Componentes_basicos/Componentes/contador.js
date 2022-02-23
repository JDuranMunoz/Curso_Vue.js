Vue.component("contador", {
    template: //html
    `
    <div>
        <h3>{{numero}}</h3>
        <button class="btn btn-primary" v-on:click="numero++">+</button>
    </div>
    `,

    data() {
        return {
            numero: 0
        }
    }
});