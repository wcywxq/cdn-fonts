<template>
  <div>
    Hello, {{ msg }}
    <custom-button />
  </div>
</template>

<script>
import CustomButton from "./components/Button.vue";

export default {
  data() {
    return {
      msg: "world"
    };
  },
  components: { CustomButton }
};
</script>

<style lang="scss" scoped></style>
