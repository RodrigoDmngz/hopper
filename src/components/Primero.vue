<template>
  <v-container>
    <v-col align="center">
      <v-row align-content="center" justify="space-around">
        {{ mensaje }}
      </v-row>
      <v-row>
        <v-text-field
          v-model="datoUno"
          label="Inserte Mensaje"
          hint="El mensaje sera insertado al titulo"
          clearable
          outlined
          rounded
        ></v-text-field>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="agregar()" outlined rounded>
            Agregar <v-icon right>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn @click="reset()" outlined rounded>
            Reset <v-icon right>mdi-refresh</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "Hola Mundo",
      datoUno: null,
    };
  },
  methods: {
    agregar() {
      if (this.datoUno != null) {
        this.mensaje = this.mensaje + this.datoUno;
        this.datoUno = "";
      }
    },
    reset() {
      this.mensaje = "Hola Mundo";
    },
  },
};
</script>

<style></style>
