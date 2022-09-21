import Vue from "vue";
import Modal from "./modal.vue";
// 构造一个唯一的实例
const newInstance = () => {
  if (Vue.prototype.$modal) {
    return;
  }
  const Instance = new Vue({
    data() {
      return {
        // 打开状态
        show: false,
        //
        title: "",
        // 确认函数
        onOk: () => {}
      };
    },
    methods: {
      handleOk() {
        this.cancel();
        if (this.onOk) {
          this.onOk.apply(this);
        }
      },
      cancel() {
        this.show = false;
      }
    },
    render(h) {
      return h(
        Modal,
        {
          on: {
            input: n => {
              this.show = n;
            }
          },
          props: {
            title: this.title,
            value: this.show,
            content: ""
          }
        },
        [
          h(
            "template",
            {
              slot: "default"
            },
            this.content
          ),
          h(
            "div",
            {
              class: "text-right",
              slot: "footer"
            },
            [
              h(
                "Button",
                {
                  on: {
                    "on-click": () => {
                      this.handleOk();
                    }
                  }
                },
                "确定"
              )
            ]
          )
        ]
      );
    }
  });
  // 先挂载到body下面去
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  // 在Vue原型上暴露一个$modal方法 方法包含三个参数
  Vue.prototype.$modal = ({ title, onOk, content }) => {
    Instance.title = `${title}`;
    Instance.show = true;
    Instance.content = content;
    Instance.onOk = onOk;
  };
};
// 在Vue.use(Modal)时,构造
Modal.install = Vue => {
  newInstance();
  Vue.component("Modal", Modal);
};
export default Modal;