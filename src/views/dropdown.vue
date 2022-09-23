<template>
  <div>
    <Dropdown @on-change="selected" v-model="value">
      <Button
        >hello
        <Icon name="angle-down" size="16"></Icon>
      </Button>
      <template #content>
        <DropdownItem name="aa">aa</DropdownItem>
        <DropdownItem name="bb">bb</DropdownItem>
      </template>
    </Dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    selected(name) {
      this.$message.success(name);
    }
  }
};
</script>
