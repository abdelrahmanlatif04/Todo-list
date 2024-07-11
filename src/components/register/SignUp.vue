<template>
  <div class="bg-[#000000aa] w-full h-[100vh] absolute top-0 left-0">
    <form
      @submit.prevent="addUser"
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
      error: "",
      rePassword: "",
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    closeTab() {
      this.$router.push({ path: "/" });
    },
    validateForm() {
      const username = this.user.name;
      const email = this.user.email;
      const password = this.user.password;
      const rePassword = this.rePassword;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^[A-Za-z0-9]{8,16}$/;
      const usernameRegex = /^[A-Za-z0-9]{8,16}$/;

      if (username.trim() === "" || !usernameRegex.test(username)) {
        this.error =
          "Username must be 8-16 characters long and contain only letters and numbers.";
        return false;
      } else if (password.trim() === "" || !passwordRegex.test(password)) {
        this.error =
          "Password must be 8-16 characters long and contain only letters and numbers.";
        return false;
      } else if (password !== rePassword) {
        this.error = "Passwords do not match.";
        return false;
      } else if (!emailRegex.test(email)) {
        this.error = "Please enter a valid email address.";
        return false;
      }

      this.checkIFnewUser();
      console.log(this.checkIFnewUser());

      // If all validations pass
      return true;
    },
    addUser() {
      if (this.validateForm()) {
        fetch(
          "https://todo-list-6e54e-default-rtdb.firebaseio.com/users.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.user),
          }
        ).catch((error) => {
          console.error("Error:", error);
        });
      }

      // this.user.name = null;
      // this.user.email = null;
      // this.user.password = null;
      // this.rePassword = null;
    },
    checkIFnewUser() {
      fetch("https://todo-list-6e54e-default-rtdb.firebaseio.com/users.json")
        .then((response) => response.json())
        .then((data) => {
          for (let id in data) {
            if (this.user.name == data[id].name) {
              this.error = "this username has been used before.";
              return false;
            } else if (this.user.email == data[id].email) {
              this.error = "this email has been used before.";
              return false;
            }
          }
        });

      return true;
    },
  },
};
</script>

<style scoped>
input {
  @apply px-4 py-2 rounded-md text-black;
}
.error {
}
</style>
