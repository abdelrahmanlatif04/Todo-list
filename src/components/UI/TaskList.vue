<template>
  <h1
    class="text-6xl text-center relative tracking-widest font-semibold text-gray-500 pt-10 before:absolute before:-bottom-10 before:tracking-wide before:text-orange-500 before:left-1/2 before:text-lg before:-translate-x-1/2 before:w-full;"
  >
    TODO APP
  </h1>
  <input-field @addTask="addTask" />
  <div
    class="relative top-20 min-w-80 max-w-[600px] w-3/5 left-1/2 -translate-x-1/2 flex flex-col gap-2"
  >
    <Task
      v-for="(task, i) in tasks"
      :key="task"
      :i="i"
      :tasks="tasks"
      @deleteTask="deleteTask"
      @taskClicked="completeTask"
    />
    <Task
      v-for="(task, i) in comTasks"
      :key="task"
      :i="i"
      :tasks="comTasks"
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
      tasks: [],
      comTasks: [],
    };
  },
  created() {
    this.bringDataBack();
  },
  methods: {
    addTask(val) {
      if (val) {
        this.tasks.push(val);
        this.storeTasks();
      }
    },
    bringDataBack() {
      let completedTasks = JSON.parse(localStorage.getItem("completed tasks"));
      let inCompletedTasks = JSON.parse(
        localStorage.getItem("incompleted tasks")
      );

      if (completedTasks && completedTasks.length > 2) {
        this.comTasks = completedTasks;
      }
      if (inCompletedTasks && inCompletedTasks.length > 2) {
        this.tasks = inCompletedTasks;
      }
    },
    completeTask(i) {
      this.comTasks.push(this.tasks[i]);
      this.deleteTask(this.tasks, i);
      this.storeTasks();
    },
    inCompleteTask(i) {
      this.tasks.push(this.comTasks[i]);
      this.deleteTask(this.comTasks, i);
      this.storeTasks();
    },

    deleteTask(arr, i) {
      arr.splice(i, 1);
      this.storeTasks();
    },

    storeTasks() {
      localStorage.setItem("incompleted tasks", JSON.stringify(this.tasks));
      localStorage.setItem("completed tasks", JSON.stringify(this.comTasks));
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
