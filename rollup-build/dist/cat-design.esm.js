import Vue from 'vue';

var clickout = {
  name: "click-out",

  // eslint-disable-next-line
  bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }

      if (binding.expression) {
        binding.value(e);
      }
    }

    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },

  update() {},

  // eslint-disable-next-line
  unbind(el, binding) {
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }

};

/**
 *  自定义指令
 *  */
const directives = [clickout];
var directives$1 = {
  install(Vue) {
    directives.forEach(el => {
      Vue.directive(el.name, el);
    });
  }

};

//
//
//
//
//

// https://bulma.io/documentation/elements/button/
const types = [
  "primary",
  "success",
  "warning",
  "danger",
  "info",
  "link",
  "dark"
];
const sizes = ["small", "normal", "medium", "large"];
var script$1 = {
  name: "sm-button",
  props: {
    // 按钮文字 可以用slot覆盖
    text: [String, Number],
    // 按钮大小
    size: {
      type: String,
      default: "normal",
      validator(v) {
        return sizes.includes(v);
      }
    },
    //  按钮类型
    type: {
      type: String,
      default: "primary",
      validator(v) {
        return types.includes(v);
      }
    },
    // 禁用状态
    disabled: Boolean,
    // 边框按钮
    outline: Boolean,
    // 圆角按钮
    round: Boolean,
    // loading状态
    loading: Boolean
  },
  computed: {
    // 按钮的class
    classes() {
      return {
        button: true,
        "is-loading": this.loading,
        "is-outlined": this.outline,
        "is-rounded": this.round,
        [`is-${this.type}`]: this.type,
        [`is-${this.size}`]: this.size
      };
    }
  },
  methods: {
    handleClick() {
      this.$emit("on-click");
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      class: _vm.classes,
      attrs: { disabled: _vm.disabled },
      on: { click: _vm.handleClick },
    },
    [
      _vm._t("default", function () {
        return [_vm._v(_vm._s(_vm.text))]
      }),
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  props: {
    value: Boolean,
    title: String,
    top: {
      type: String,
      default() {
        return "50px"
      }
    },
    clickMaskHide: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(n) {
      this.currentValue = n;
    }
  },
  methods: {
    close() {
      this.currentValue = false;
      this.$emit("input", false);
    },
    clickMask() {
      if (this.clickMaskHide) {
        this.close();
      }
    }
  }
};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: { modal: true, "is-active": !!this.value } }, [
    _c("div", {
      staticClass: "modal-background",
      on: { click: _vm.clickMask },
    }),
    _vm._v(" "),
    _c("div", { staticClass: "modal-card shadow", style: { top: _vm.top } }, [
      _c("header", { staticClass: "modal-card-head" }, [
        _c("p", { staticClass: "modal-card-title" }, [
          _vm._v(_vm._s(_vm.title)),
        ]),
        _vm._v(" "),
        _c("button", {
          staticClass: "delete",
          attrs: { "aria-label": "close" },
          on: { click: _vm.close },
        }),
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "modal-card-body" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _c(
        "footer",
        { staticClass: "modal-card-foot" },
        [
          _vm._t("footer", function () {
            return [
              _c(
                "Button",
                { attrs: { type: "default" }, on: { "on-click": _vm.close } },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                { attrs: { type: "primary" }, on: { "on-click": _vm.close } },
                [_vm._v("确定")]
              ),
            ]
          }),
        ],
        2
      ),
    ]),
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-1fffc050_0", { source: ".modal[data-v-1fffc050] {\n  display: block;\n  opacity: 0;\n  z-index: -1;\n  transition: all 0.2s linear;\n}\n.modal.is-active[data-v-1fffc050] {\n  opacity: 1;\n  z-index: 40;\n  transition: all 0.2s linear;\n}\n.modal.is-active .modal-background[data-v-1fffc050] {\n  transition: all 0.2s linear;\n  background-color: rgba(35, 45, 65, 0.7);\n}\n.modal.is-active .modal-card[data-v-1fffc050] {\n  transition: all 0.2s linear;\n  transform: translateY(0px);\n}\n.modal-background[data-v-1fffc050] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 0.2s linear;\n  background-color: transparent;\n}\n.modal-card[data-v-1fffc050] {\n  transition: all 0.2s linear;\n  transform: translateY(-80px);\n}\n.modal-card-foot div[data-v-1fffc050] {\n  flex: 1;\n  justify-content: right;\n}\n.modal-card-body[data-v-1fffc050] {\n  text-align: left;\n}\n.modal-card-head[data-v-1fffc050], .modal-card-foot[data-v-1fffc050] {\n  background-color: #fff;\n  border-color: #eff3f7;\n}\n.modal-card-title[data-v-1fffc050] {\n  text-align: left;\n}\n\n/*# sourceMappingURL=modal.vue.map */", map: {"version":3,"sources":["/Users/xubowen/Documents/git/exp/vue-project/src/ui/modal/modal.vue","modal.vue"],"names":[],"mappings":"AA8DA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,2BAAA;AC7DA;AD+DA;EACA,UAAA;EACA,WAAA;EACA,2BAAA;AC7DA;AD+DA;EACA,2BAAA;EACA,uCAAA;AC7DA;AD8DA;EACA,2BAAA;EACA,0BAAA;AC5DA;AD6DA;EACA,eAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,2BAAA;EACA,6BAAA;AC1DA;AD2DA;EACA,2BAAA;EACA,4BAAA;ACxDA;AD0DA;EACA,OAAA;EACA,sBAAA;ACvDA;ADwDA;EACA,gBAAA;ACrDA;ADsDA;EACA,sBAAA;EACA,qBAAA;ACnDA;ADoDA;EACA,gBAAA;ACjDA;;AAEA,oCAAoC","file":"modal.vue","sourcesContent":["<template>\n  <div :class=\"{ modal: true, 'is-active': !!this.value }\">\n    <div class=\"modal-background\" @click=\"clickMask\"></div>\n    <div class=\"modal-card shadow\" :style=\"{ top }\">\n      <header class=\"modal-card-head\">\n        <p class=\"modal-card-title\">{{ title }}</p>\n        <button class=\"delete\" aria-label=\"close\" @click=\"close\"></button>\n      </header>\n      <section class=\"modal-card-body\">\n        <slot></slot>\n      </section>\n      <footer class=\"modal-card-foot\">\n        <slot name=\"footer\">\n          <Button type=\"default\" @on-click=\"close\">取消</Button>\n          <Button type=\"primary\" @on-click=\"close\">确定</Button>\n        </slot>\n      </footer>\n    </div>\n  </div>\n</template>\n<script>\nexport default {\n  props: {\n    value: Boolean,\n    title: String,\n    top: {\n      type: String,\n      default() {\n        return \"50px\"\n      }\n    },\n    clickMaskHide: {\n      type: Boolean,\n      default() {\n        return true\n      }\n    }\n  },\n  data() {\n    return {\n      currentValue: this.value\n    }\n  },\n  watch: {\n    value(n) {\n      this.currentValue = n\n    }\n  },\n  methods: {\n    close() {\n      this.currentValue = false\n      this.$emit(\"input\", false)\n    },\n    clickMask() {\n      if (this.clickMaskHide) {\n        this.close()\n      }\n    }\n  }\n}\n</script>\n<style lang=\"sass\" scoped>\n.modal\n  display: block\n  opacity: 0\n  z-index: -1\n  transition: all 0.2s linear\n  // transform: translateY(-80px)\n  &.is-active\n      opacity: 1\n      z-index: 40\n      transition: all 0.2s linear\n      // transform: translateY(0px)\n      .modal-background\n        transition: all 0.2s linear\n        background-color: rgba(35,45,65,.7)\n      .modal-card\n        transition: all 0.2s linear\n        transform: translateY(0px)\n.modal-background\n  position: fixed\n  top: 0\n  bottom: 0\n  left: 0\n  right: 0\n  transition: all 0.2s linear\n  background-color: transparent\n.modal-card\n   transition: all 0.2s linear\n   transform: translateY(-80px)\n.modal-card-foot\n  div\n    flex: 1\n    justify-content: right\n.modal-card-body\n  text-align: left\n.modal-card-head,.modal-card-foot\n  background-color: #fff\n  border-color: #eff3f7\n.modal-card-title\n   text-align: left\n</style>\n",".modal {\n  display: block;\n  opacity: 0;\n  z-index: -1;\n  transition: all 0.2s linear;\n}\n.modal.is-active {\n  opacity: 1;\n  z-index: 40;\n  transition: all 0.2s linear;\n}\n.modal.is-active .modal-background {\n  transition: all 0.2s linear;\n  background-color: rgba(35, 45, 65, 0.7);\n}\n.modal.is-active .modal-card {\n  transition: all 0.2s linear;\n  transform: translateY(0px);\n}\n\n.modal-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 0.2s linear;\n  background-color: transparent;\n}\n\n.modal-card {\n  transition: all 0.2s linear;\n  transform: translateY(-80px);\n}\n\n.modal-card-foot div {\n  flex: 1;\n  justify-content: right;\n}\n\n.modal-card-body {\n  text-align: left;\n}\n\n.modal-card-head, .modal-card-foot {\n  background-color: #fff;\n  border-color: #eff3f7;\n}\n\n.modal-card-title {\n  text-align: left;\n}\n\n/*# sourceMappingURL=modal.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-1fffc050";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

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
      return h(__vue_component__, {
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
      }, [h("template", {
        slot: "default"
      }, this.content), h("div", {
        class: "text-right",
        slot: "footer"
      }, [h("Button", {
        on: {
          "on-click": () => {
            this.handleOk();
          }
        }
      }, "确定")])]);
    }

  }); // 先挂载到body下面去

  const component = Instance.$mount();
  document.body.appendChild(component.$el); // 在Vue原型上暴露一个$modal方法 方法包含三个参数

  Vue.prototype.$modal = ({
    title,
    onOk,
    content
  }) => {
    Instance.title = `${title}`;
    Instance.show = true;
    Instance.content = content;
    Instance.onOk = onOk;
  };
}; // 在Vue.use(Modal)时,构造


__vue_component__.install = Vue => {
  newInstance();
  Vue.component("Modal", __vue_component__);
};

// 记得把main.js这个删了

__vue_component__$1.types = types; // import Modal from "./modal/modal.vue";

const components = {
  Button: __vue_component__$1,
  Modal: __vue_component__
}; // 提供install函数，这样就能Vue.use

function install(Vue) {
  // 注册指令
  Vue.use(directives$1);
  Object.keys(components).forEach(key => {
    // 注册组件
    let cp = components[key];

    if (cp.install) {
      Vue.use(cp);
    } else {
      Vue.component(key, components[key]);
    }
  });
} // 这里...components,后面就可以直接 结构使用这里的组件了


var index = { ...components,
  install
};

export { __vue_component__$1 as Button, __vue_component__ as Modal, index as default };
