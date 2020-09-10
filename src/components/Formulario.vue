<template>
  <v-container>
    <v-col>
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-text-field v-model="nombre" label="nombre" :rules="nombreReglas">
          </v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="correo" label="correo" :rules="correoReglas">
          </v-text-field>
        </v-row>
        <v-row>
          <v-slider
            v-model="pene"
            label="tamaño de pene"
            :rules="peneReglas"
            max="5"
            ticks="always"
            tick-size="10"
            thumb-label
          ></v-slider>
        </v-row>
        <v-row>
          <v-btn v-model="enviar" @click="BuildJSON()">Enviar</v-btn>
        </v-row>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      json: "",
      valid: true,
      enviar: null,
      nombre: "",
      correo: "",
      pene: null,
      nombreReglas: [
        (v) => !!v || "Nombre es requerido",
        (v) => v.length >= 10 || "El nombre debe tener al menos 10",
      ],
      correoReglas: [
        (v) => !!v || "E-mail is required",
        (v) => /\S+@\S+\.\S+/.test(v) || "E-mail must be valid",
      ],
      peneReglas: [(v) => v <= 3 || "No puedes tener un pene mas grande que 3"],
    };
  },
  methods: {
    validar() {
      this.$refs.form.validate();
    },
    BuildJSON() {
      this.json = {
        nombre: this.nombre,
        correo: this.correo,
        pene: this.pene,
      };
      console.log(JSON.stringify(this.json));
      return this.json;
    },
  },
};
</script>

<style></style>
