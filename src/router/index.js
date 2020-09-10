import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/primero",
    name: "Primero",
    component: () =>
      import(/* webpackChunkName: "VistaUno" */ "../views/VistaUno.vue"),
  },
  {
    path: "/segundo",
    name: "Segundo",
    component: () =>
      import(/* webpackChunkName: "VistaDos" */ "../views/VistaDos.vue"),
  },
  {
    path: "/tercero",
    name: "Tercero",
    component: () =>
      import(/* webpackChunkName: "VistaTres" */ "../views/VistaTres.vue"),
  },
  {
    path: "/todos",
    name: "Todos",
    component: () =>
      import(/* webpackChunkName: "VistaTres" */ "../views/VistaTodas.vue"),
  },
  {
    path: "/formulario",
    name: "Formulario",
    component: () =>
      import(/* webpackChunkName: "VistaTres" */ "../views/VistaForm.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
