// components/ToTapBtn/ToTapBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    showBtn: function() {
      this.setData({
        active: true
      });
    },
    hideBtn: function() {
      this.setData({
        active: false
      });
      this.triggerEvent("totop");
    }
  }
});
