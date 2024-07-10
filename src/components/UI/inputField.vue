<template>
  <div
    class="field h-11 min-w-80 max-w-[600px] w-3/5 left-1/2 -translate-x-1/2 relative top-14 rounded-md overflow-hidden"
  >
    <button
      @click="addTask"
      class="h-full text-sm absolute right-0 font-semibold text-gray-200 hover:tracking-widest px-[6px] duration-300 transition-all bg-orange-400 z-10 hover:opacity-70"
    >
      Add task
    </button>
    <input
      :placeholder="`Ex : ${placeHolding()}`"
      type="text"
      class="w-full pl-4 py-2 pr-12 text-xl bg-gray-200 text-black outline-none"
      @keydown="pressed()"
      v-model="val"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: null,
    };
  },
  methods: {
    placeHolding() {
      let placeholdersExamples = [
        "Convince the cat to do the dishes",
        "Practice my Oscar acceptance speech",
        "Teach the toaster to make coffee",
        "Perfect my ninja skills",
        "Stare at a wall for world record attempt.",
        "Find sock thief in laundry.",
        "Broker coffee-alarm peace deal.",
      ];
      return placeholdersExamples[Math.floor(Math.random() * 6)];
    },
    pressed() {
      if (event.key === "Enter") {
        this.addTask();
      }
    },
    addTask() {
      this.$emit("addTask", this.val);
      this.val = null;
    },
  },
};
</script>

<style></style>
