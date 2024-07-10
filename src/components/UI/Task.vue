<template>
  <div :class="`p-2 bg-gray-200 rounded-lg relative cursor-pointer ${state}`">
    <div
      :class="`overflow-hidden before:-translate-x-1/2 before:-translate-y-1/2 before:top-5 before:right-0 before:rounded-sm before:absolute before:aspect-square before:h-5 before:border-gray-600 before:border ${
        state
          ? 'before:bg-gradient-to-tl before:from-orange-300 before:to-gray-300'
          : 'before:bg-gray-200'
      }`"
      @click="completeTask(i)"
    >
      {{ tasks[i] }}
    </div>
    <img
      @click="deleteTask(tasks, i)"
      class="h-1/2 absolute top-1/2 -right-5 sm:-right-8 -translate-y-1/2 hover:scale-125 smooth"
      src="../../assets/trash-outline.svg"
    />
  </div>
</template>

<script>
export default {
  props: ["tasks", "i", "state"],
  methods: {
    completeTask(i) {
      this.$emit("completeTask", i);
    },
    deleteTask(tasks, i) {
      this.$emit("deleteTask", tasks, i);
    },
  },
};
</script>

<style>
.completed > div::before {
  content: url("../src/assets/checkmark-outline.svg");
}
</style>
