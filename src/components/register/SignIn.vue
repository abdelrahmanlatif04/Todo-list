<template>
  <div class="bg-[#000000aa] w-full h-[100vh] absolute top-0 left-0">
    <form
      class="flex flex-col gap-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#eee] p-6 rounded-lg"
      @keydown="pressed"
      @submit.prevent="signIn"
    >
      <img
        src="../../assets/close.png"
        @click="closeTab"
        class="absolute right-2 top-3 h-3 cursor-pointer"
      />
      <input
        v-model="name"
        type="text"
        name="name"
        id="name"
        placeholder="Enter Name"
      />
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="Enter Password"
      />
      <button
        class="smooth border-2 border-orange-400 bg-orange-400 text-white hover:text-orange-400 hover:bg-transparent px-4 py-[6px] self-center rounded-lg"
        type="submit"
      >
        Sign In
      </button>
      <p class="text-center text-sm">
        You don't have an account?<br />
        <router-link :to="{ name: 'signUp' }">sign up</router-link>
      </p>

      <p
        class="text-center text-sm w-full text-red-600 font-semibold absolute left-0 bottom-0 translate-y-[150%]"
      >
        {{ error }}
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      password: null,
      error: null,
    };
  },
  methods: {
    closeTab() {
      this.$router.push({ path: "/" });
    },
    signIn() {
      fetch("https://todo-list-6e54e-default-rtdb.firebaseio.com/users.json")
        .then((res) => res.json())
        .then((res) => {
          for (let id in res) {
            if (res[id].name == this.name) {
              if (res[id].password == this.password) {
                localStorage.setItem("user", JSON.stringify(res[id]));
                this.$router.push({ path: "/taskList" });
              } else {
                this.error = "Wrong Password";
              }
            } else {
              this.error = "Invalid serName";
            }
          }
        });
    },
  },
};
</script>

<style>
input {
  @apply px-4 py-2 rounded-md;
}
</style>
