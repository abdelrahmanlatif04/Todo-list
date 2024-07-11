<template>
  <div
    class="w-full min-h-[100vh] py-10 flex flex-col-reverse md:flex-row items-center justify-around"
  >
    <div class="flex flex-col gap-4 md:gap-6 items-center">
      <h1
        class="text-6xl lg:text-7xl text-gray-400 relative tracking-widest font-semibold pt-10"
      >
        TODO APP
      </h1>
      <p
        class="text-2xl font-semibold w-full text-orange-400 text-center md:text-start"
      >
        Procrastinate like a pro
      </p>
      <div class="w-full flex justify-center md:justify-start relative gap-10">
        <router-link to="/signIn">Sign In </router-link>
        <router-link to="/taskList">Use as guest</router-link>
      </div>
    </div>
    <img class="w-4/5 md:w-1/3" src="../assets/to-do-list.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  methods: {
    asd() {
      if (this.user) {
        this.$router.push({ path: "/TaskList" });
      }
    },
  },
  created() {
    this.asd();
  },
};
</script>

<style scoped>
a {
  @apply px-2 py-1 border-2 border-orange-400 bg-orange-400 text-white hover:text-orange-400 hover:bg-transparent rounded-md relative;
}
</style>
