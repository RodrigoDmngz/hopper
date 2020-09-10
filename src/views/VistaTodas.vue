<template>
  <v-container fluid>
    <v-row align-content="center">
      <v-row justify="center">
        <v-card outlined>
          <Primero />
        </v-card>
      </v-row>
      <v-row justify="center">
        <v-card outlined>
          <Segundo />
        </v-card>
      </v-row>
      <v-row justify="center">
        <v-card outlined>
          <Tercero />
        </v-card>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import Primero from "@/components/Primero.vue";
import Segundo from "@/components/Segundo.vue";
import Tercero from "@/components/Tercero.vue";
export default {
  components: {
    Primero,
    Segundo,
    Tercero,
  },
};
</script>

<style></style>
