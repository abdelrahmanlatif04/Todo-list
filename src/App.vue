<template>
  <div class="flex gap-3 absolute z-10">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'TaskList' }">Task List</router-link> |
    <router-link :to="{ name: 'signIn' }">sign in</router-link> |
    <router-link :to="{ name: 'signUp' }">sign up</router-link>
  </div>
  <router-view></router-view>
</template>

<script></script>

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
