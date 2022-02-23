Vue.component("saludo", {
    template: //html
    `
    <div>
        <h1 class="mt-3">{{saludo}}</h1>
        <h3>h3 desde Vue.component</h3>
    </div>
    `,
    
    data() {
        return {
            saludo: "Saludo desde Vue.js"
        }
    }
});