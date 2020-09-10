<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item to="/primero">
          <v-list-item-action>
            <v-icon>mdi-label-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Uno</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/segundo">
          <v-list-item-action>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/tercero">
          <v-list-item-action>
            <v-icon>mdi-eye-off-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tres</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/todos">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Todos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/formulario">
          <v-list-item-action>
            <v-icon>mdi-comment-text-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Formulario</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" tag="v-icon">
        <v-icon to="/">mdi-home</v-icon>
      </router-link>
      <v-toolbar-title to="/"> Hopper</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: null,
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
