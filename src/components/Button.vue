<template>
  <div class="button">
    <a-button type="primary" @click="addCounter">按钮</a-button>
    {{ count }}
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    addCounter() {
      this.count += 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>
