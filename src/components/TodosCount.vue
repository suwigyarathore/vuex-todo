<template>
  <h1>The total number of all todos is: {{count}}</h1>
</template>

<script>
export default {
  props: ["count"],
  computed: {
    count() {
      return this.$store.getters.todosCount;
    }
  }
};
</script>