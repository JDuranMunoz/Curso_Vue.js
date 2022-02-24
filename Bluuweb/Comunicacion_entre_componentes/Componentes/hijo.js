Vue.component("hijo", {
    template: //html
    `
    <div class="py-5 bg-success mt-3">
        <h4>Componente hijo: {{numero}}</h4>
    </div>
    `,

    // Los 'props' son un array con un nombre.
    // El nombre debe ser el que se coloca en: <hijo></hijo> del padre.js
    // Se usan para recibir información
    props: ["numero"]
});