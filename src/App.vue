<template>
  <div class="flex gap-3 z-20 absolute">
    <router-link to="/">Home</router-link>|
    <router-link to="/signUp">Sign up</router-link>|
    <router-link to="/signIn">Sign In</router-link>|
    <router-link to="/taskList">Tasks list</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      fetch(
        "https://todo-list-6e54e-default-rtdb.firebaseio.com/users.json",
        {}
      )
        .then((res) => res.json())
        .then((res) => (this.data = res));
    },
  },
};
</script>

<style>
* {
  @apply outline-none;
}
a {
  @apply hover:text-orange-500 tracking-wide hover:tracking-widest smooth font-semibold;
}
a.active {
  @apply text-blue-500;
}

.smooth {
  @apply transition-all duration-300;
}
</style>
