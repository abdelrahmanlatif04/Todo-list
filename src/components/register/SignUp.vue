<template>
  <div class="bg-[#000000aa] w-full h-[100vh] absolute top-0 left-0">
    <form
      class="flex flex-col gap-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#eee] p-6 rounded-lg overflow-hidden"
    >
      <img
        src="../../assets/close.png"
        @click="closeTab"
        class="absolute right-2 top-3 h-3 cursor-pointer"
      />
      <input type="text" name="name" id="name" placeholder="Enter Name" />
      <input type="email" placeholder="Enter Email" />
      <input type="password" name="password" placeholder="Enter Password" />
      <input type="password" name="rePassword" placeholder="Renter Password" />
      <button
        class="smooth border-2 border-orange-400 bg-orange-400 text-white hover:text-orange-400 hover:bg-transparent px-4 py-2 self-center rounded-lg"
        type="submit"
      >
        Sign Up
      </button>

      <p class="text-center text-sm">
        You have an account already?<br />
        <router-link :to="{ name: 'signIn' }">sign in</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    closeTab() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
input {
  @apply px-4 py-2 rounded-md text-gray-200;
}
</style>
