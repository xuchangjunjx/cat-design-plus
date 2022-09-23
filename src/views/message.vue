<template>
  <div style="margin-top:100px">
    <Button type="danger" @on-click="showMessage">$message</Button>
    <Button type="primary" @on-click="showMessage1">Message</Button>
  </div>
</template>
<script>
import { Message } from "@/ui";
export default {
  methods: {
    showMessage() {
      this.$message.error("success");
    },
    showMessage1() {
      Message({
        type: "success",
        text: "hello"
      });
    }
  }
};
</script>
