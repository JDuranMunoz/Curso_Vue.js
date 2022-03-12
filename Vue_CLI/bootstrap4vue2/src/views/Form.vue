<template>
    <div class="mt-3">
        <h2 class="text-center">Formularios</h2>

        <form class="mt-3">
            <b-row>

                <!-- Form input -->
                <b-col md="3">        
                    <b-form-input
                    type="text"
                    v-model="texto"
                    :state="comprobar"
                    >
                    </b-form-input>
                    <small>Mínimo 3 caracteres</small>
                </b-col>

                <!-- Form select -->
                <b-col md="3">        
                    <b-form-select
                    v-model="select"
                    :options="animales"
                    >
                    </b-form-select>
                    <small>Selección: {{select}}</small>
                </b-col>

                <!-- Form radio -->
                <b-col md="3">
                    <b-form-radio-group
                    v-model="radio"
                    :options="animalesRadio"
                    >
                    </b-form-radio-group>
                    <small>Radio: {{radio}}</small>
                </b-col>

                <!-- Form checkbox -->
                <b-col md="3">
                    <b-form-checkbox-group
                    v-model="check"
                    :options="animalesRadio"
                    >
                    </b-form-checkbox-group>
                    <small>Checkbox: {{check}}</small>
                </b-col>

            </b-row>
        </form>
        <p>texto: {{texto}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                texto: '',
                radio: null,
                select: null,
                animales: [
                    {value: null, text: 'Seleccione un animal'},
                    {value: 'perro', text: 'Perro'},
                    {value: 'gato', text: 'Gato'},
                    {value: 'conejo', text: 'Conejo'}
                ],
                animalesRadio: [
                    {value: 'perro', text: 'Perro'},
                    {value: 'gato', text: 'Gato'},
                    {value: 'conejo', text: 'Conejo'}
                ],
                check: []
            }
        },
        computed: {
            comprobar() {
                return this.texto.length > 2 ? true : false;
            }
        }
    }
</script>