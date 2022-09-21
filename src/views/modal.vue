<template>
  <div>
    <Modal v-model="show" title="hello" top="120px">
      <div>你好👋</div>
      <div slot="footer" class="buttons">
        <Button type="danger" outline @on-click="ok">取消</Button>
        <Button type="dark" round @on-click="ok">确定</Button>
      </div>
    </Modal>
    <Button @on-click="open">打开modal</Button>
    <Button @on-click="open$modal">打开$modal</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    open$modal() {
      this.$modal({
        title: "$modal",
        content: "hellow 你好",
        onOk: () => {
          console.log("ok");
        }
      });
    },
    ok() {
      this.show = false;
    }
  }
};
</script>
