<template>
  <v-container>
    <v-col align="center">
      <v-row align-content="center" justify="space-around">
        Ahora me ves, ahora no me ves.
      </v-row>
      <v-row align-content="center" justify="space-around">
        <v-switch
          v-model="status"
          :label="`El switch esta: ${status.toString()}`"
        ></v-switch>
      </v-row>
      <v-row align-content="center" justify="space-around">
        <p v-if="status">{{ mensaje }}</p>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "Ahora si me ves!",
      status: false,
    };
  },
};
</script>

<style></style>
