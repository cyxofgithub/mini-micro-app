import CreateApp, { appInstanceMap } from './app'

// 自定义元素
class MyElement extends HTMLElement {
    // 声明需要监听的属性名，只有这些属性变化时才会触发attributeChangedCallback
    static get observedAttributes () {
      return ['name', 'url']
    }
  
    constructor() {
      super();
    }
  
    // 当 custom element 首次被插入文档 DOM 时，被调用。
    connectedCallback() {
      // 创建微应用实例
      const app = new CreateApp({
        name: this.name,
        url: this.url,
        container: this,
      })

      // 记入缓存，用于后续功能
      appInstanceMap.set(this.name, app)
    }
  
    disconnectedCallback () {
      // 获取应用实例
      const app = appInstanceMap.get(this.name)
      // 如果有属性destory，则完全卸载应用包括缓存的文件
      // 默认情况下，子应用被卸载后会缓存静态资源，以便在重新渲染时获得更好的性能
      app.unmount(this.hasAttribute('destory'))
    }
  
    // 当 custom element 增加、删除、修改自身属性时，被调用。
    attributeChangedCallback (attrName, oldVal, newVal) {
      // 分别记录name及url的值
      if (attrName === 'name' && !this.name && newVal) {
        this.name = newVal
      } else if (attrName === 'url' && !this.url && newVal) {
        this.url = newVal
      }
    }
  }
  
  /**
   * 注册元素
   * 注册后，就可以像普通元素一样使用micro-app，当micro-app元素被插入或删除DOM时即可触发相应的生命周期函数。
   */
  window.customElements.define('micro-app', MyElement)

  export function defineElement () {
    // 如果已经定义过，则忽略
    if (!window.customElements.get('micro-app')) {
      window.customElements.define('micro-app', MyElement)
    }
  }