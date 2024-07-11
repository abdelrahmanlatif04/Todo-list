import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import signIn from "./components/register/SignIn.vue";
import signUp from "./components/register/SignUp.vue";
import Home from "./components/Home.vue";
import TaskList from "./components/UI/TaskList.vue";
const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
  {
    path: "/TaskList",
    component: TaskList,
    name: "TaskList",
  },

  {
    path: "/signIn",
    component: signIn,
    name: "signIn",
  },
  {
    path: "/signUp",
    component: signUp,
    name: "signUp",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

const app = createApp(App);

app.use(router);

app.mount("#app");
