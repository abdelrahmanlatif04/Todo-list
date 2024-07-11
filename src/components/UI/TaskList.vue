<template>
  <h1
    class="text-6xl text-center relative tracking-widest font-semibold text-gray-500 pt-10 before:absolute before:-bottom-10 before:tracking-wide before:text-orange-500 before:left-1/2 before:text-lg before:-translate-x-1/2 before:w-full"
  >
    TODO APP
  </h1>
  <input-field @addTask="addTask" />
  <div
    class="relative top-20 min-w-80 max-w-[600px] w-3/5 left-1/2 -translate-x-1/2 flex flex-col gap-2"
  >
    <Task
      v-for="(task, i) in user.tasks"
      :key="task"
      :i="i"
      :tasks="user.tasks"
      @deleteTask="deleteTask"
      @taskClicked="completeTask"
    />
    <Task
      v-for="(task, i) in user.doneTasks"
      :key="task"
      :i="i"
      :tasks="user.doneTasks"
      @deleteTask="deleteTask"
      @taskClicked="inCompleteTask"
      :state="'completed'"
    />
  </div>
</template>

<script>
import inputField from "./inputField.vue";
import Task from "./Task.vue";
export default {
  name: "App",
  data() {
    return {
      user: {
        name: null,
        password: null,
        tasks: [],
        doneTasks: [],
      },
    };
  },
  created() {
    this.bringDataBack();
  },
  methods: {
    addTask(val) {
      if (val) {
        this.user.tasks.push(val);
        this.storeTasks();
      }
    },
    bringDataBack() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },

    completeTask(i) {
      this.user.doneTasks.push(this.user.tasks[i]);
      this.deleteTask(this.user.tasks, i);
      this.storeTasks();
    },
    inCompleteTask(i) {
      this.user.tasks.push(this.user.doneTasks[i]);
      this.deleteTask(this.user.doneTasks, i);
      this.storeTasks();
    },

    deleteTask(arr, i) {
      arr.splice(i, 1);
      this.storeTasks();
    },

    storeTasks() {
      fetch("https://todo-list-6e54e-default-rtdb.firebaseio.com/users.json");
      localStorage.setItem("tasks", JSON.stringify(this.user.tasks));
      localStorage.setItem("done tasks", JSON.stringify(this.user.doneTasks));
    },
  },
  components: { inputField, Task },
};
</script>

<style scoped>
h1::before {
  content: "Procrastinate like a pro";
}
</style>
