import Vue from "vue";
import MessageComponent from "./message.vue";
// 构造一个唯一的实例
const newInstance = () => {
  if (Vue.prototype.$message) {
    return;
  }
  const Instance = new Vue({
    data() {
      return {
        show: false,
        text: "",
        type: ""
      };
    },
    render(h) {
      return h(MessageComponent, {
        on: {
          input: n => {
            this.show = n;
          }
        },
        props: {
          text: this.text,
          value: this.show,
          type: this.type
        }
      });
    }
  });
  // 先挂载到body下面去
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const showMessgae = ({ text, type }) => {
    // 如果当前已经出现了
    if (Instance.show) {
      Instance.show = false;
      // 延迟100毫米在打开
      setTimeout(() => {
        Instance.text = text;
        Instance.show = true;
        Instance.type = type;
      }, 100);
    } else {
      Instance.text = text;
      Instance.show = true;
      Instance.type = type;
    }
  };

  // 在Vue原型上暴露一个$modal方法 方法包含三个参数
  Vue.prototype.$message = showMessgae;
  Vue.prototype.$message.success = text => {
    showMessgae({ text, type: "success" });
  };
  Vue.prototype.$message.error = text => {
    showMessgae({ text, type: "error" });
  };
  Vue.prototype.$message.warning = text => {
    showMessgae({ text, type: "warning" });
  };
  Vue.prototype.$message.info = text => {
    showMessgae({ text, type: "info" });
  };
};
// 这里就不暴露组件了
export default {
  install: () => {
    newInstance();
  }
};
//  暴露出方法
export function Message(config) {
  Vue.prototype.$message(config);
}
