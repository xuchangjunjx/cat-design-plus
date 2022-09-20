<template>
  <div class="home">
    <div>
      <Button :type="type" v-for="type in types" :key="type">{{ type }}</Button>
    </div>
    <div>
      <Button :type="type" circle v-for="type in types" :key="type">{{
        type
      }}</Button>
    </div>
    <div>
      <Button :type="type" ghost circle v-for="type in types" :key="type">{{
        type
      }}</Button>
    </div>
    <div>
      <Button disabled :type="type" circle v-for="type in types" :key="type">{{
        type
      }}</Button>
    </div>
  </div>
</template>

<script>
import Button, { types } from "@/ui/button/button.vue";
export default {
  name: "Home",
  components: {
    Button
  },
  data() {
    return {
      types
    };
  }
};
</script>
<style lang="less" scoped>
.home {
  div {
    padding: 1rem 0;
  }
}
</style>
