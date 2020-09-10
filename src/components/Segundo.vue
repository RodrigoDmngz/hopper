<template>
  <v-container>
    <v-col align="center" justify="space-around">
      <v-row align-content="center" justify="space-around">
        Listas
      </v-row>
      <v-row>
        <v-text-field
          v-model="item"
          label="Inserte Mensaje"
          hint="El mensaje sera insertado a la lista"
          clearable
          outlined
          rounded
        ></v-text-field>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="agregar()" outlined rounded>Agregar</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="reset()" outlined rounded>Reset</v-btn>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-list>
          <v-list-item v-for="elemento in lista" v-bind:key="elemento">
            <v-list-item-icon>
              <v-icon left>mdi-octagon</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="elemento"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lista: [],
      item: "",
    };
  },
  methods: {
    agregar() {
      this.lista.push(this.item);
      this.item = "";
    },
    reset() {
      this.lista.splice(0, this.lista.length);
    },
  },
};
</script>

<style></style>
