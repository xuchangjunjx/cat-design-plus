<template>
  <div>
    <div class="buttons">
      <Button :type="type" v-for="type in types" :key="type">{{ type }}</Button>
    </div>
    <div class="buttons">
      <Button disabled :type="type" v-for="type in types" :key="type"
        >disabled</Button
      >
    </div>
    <div class="buttons">
      <Button outline :type="type" v-for="type in types" :key="type"
        >outline</Button
      >
    </div>
    <div class="buttons">
      <Button round :type="type" v-for="type in types" :key="type"
        >round</Button
      >
    </div>
    <div class="buttons">
      <sm-button loading :type="type" v-for="type in types" :key="type"
        >loading</sm-button
      >
    </div>
  </div>
</template>
<script>
import { Button } from "@/ui";
export default {
  components: {
    SmButton: Button
  },
  methods: {
    clicked() {
      console.log("clicked");
    }
  },
  data() {
    return {
      types: Button.types
    };
  }
};
</script>
