<template>
  <div class="bg-[#000000aa] w-full h-[100vh] absolute top-0 left-0">
    <form
      @submit.prevent="signUp"
      class="flex flex-col gap-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#eee] p-6 rounded-lg"
    >
      <img
        src="../../assets/close.png"
        @click="closeTab"
        class="absolute right-2 top-3 h-3 cursor-pointer"
      />
      <input
        v-model="user.name"
        type="text"
        name="name"
        id="name"
        placeholder="Enter Name"
      />
      <input v-model="user.email" type="text" placeholder="Enter Email" />
      <input
        v-model="user.password"
        type="password"
        name="password"
        placeholder="Enter Password"
      />
      <input
        v-model="rePassword"
        type="password"
        name="rePassword"
        placeholder="Renter Password"
      />
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
      users: null,
      error: "",
      rePassword: "",
      user: {
        name: "",
        email: "",
        password: "",
        tasks: ["Hi I'm the 1st inCompleted Task"],
        doneTasks: ["Hi I'm the 1st Completed Task"],
      },
    };
  },
  methods: {
    closeTab() {
      this.$router.push({ path: "/" });
    },
    signUp() {
      this.error = null;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^[A-Za-z0-9]{8,16}$/;
      const usernameRegex = /^[A-Za-z0-9]{8,16}$/;

      if (!this.user.name || !usernameRegex.test(this.user.name)) {
        this.error =
          "Username must be 8-16 characters long and contain only letters and numbers.";
        return false;
      } else if (
        !this.user.password ||
        !passwordRegex.test(this.user.password)
      ) {
        this.error =
          "Password must be 8-16 characters long and contain only letters and numbers.";
        return false;
      } else if (this.user.password !== this.rePassword) {
        this.error = "Passwords do not match.";
        return false;
      } else if (!emailRegex.test(this.user.email)) {
        this.error = "Please enter a valid email address.";
        return false;
      }

      fetch("https://todo-list-6e54e-default-rtdb.firebaseio.com/users.json")
        .then((res) => res.json())
        .then((res) => {
          for (let id in res) {
            if (res[id].name == this.user.name) {
              this.error = "this username has been used before";
              return false;
            } else if (res[id].email == this.user.email) {
              this.error = "this email has been used before";
              return false;
            }
          }
          fetch(
            "https://todo-list-6e54e-default-rtdb.firebaseio.com/users.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(this.user),
            }
          );
          localStorage.setItem("user", JSON.stringify(this.user));
          this.user = {
            name: "",
            email: null,
            password: null,
            tasks: ["Hi I'm the 1st inCompleted Task"],
            doneTasks: ["Hi I'm the 1st Completed Task"],
          };
          this.rePassword = null;
          this.$router.push({ path: "/taskList" });
        });
    },
  },
};
</script>

<style scoped>
input {
  @apply px-4 py-2 rounded-md text-black;
}
</style>
