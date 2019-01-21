// components/InputBox/InputBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "备 注："
    },
    placeholder: {
      type: String,
      value: "特殊需求请备注(少于200字)..."
    },
    value: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    remarkBoxShow: false,
    boxTransitionData: {},
    maskOpacityData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //组件加载显示
    in: function () {
      this.setData({
        remarkBoxShow: true
      })
      setTimeout(() => {
        this.boxTransition.translateY(-270).step();
        this.maskOpacityChange.opacity(1).step();
        this.setData({
          boxTransitionData: this.boxTransition.export(),
          maskOpacityData: this.maskOpacityChange.export()
        })
      }, 1)
    },
    //组件卸载隐藏
    out: function () {
      this.boxTransition.translateY(0).step();
      this.maskOpacityChange.opacity(0).step();
      this.setData({
        boxTransitionData: this.boxTransition.export(),
        maskOpacityData: this.maskOpacityChange.export()
      })
      setTimeout(() => {
        this.setData({
          remarkBoxShow: false
        })
      }, 1000)
    },
    //提交表单信息
    handleConfirm: function (e) {
      this.out();
      var myEventDetail = {
        inputValue: e.detail.value.remark
      };
      this.triggerEvent('confirm', myEventDetail);
    },
    //取消按钮事件
    handleCancel: function () {
      this.out();
      this.triggerEvent('cancel');
    },

  },

  ready: function () {
    //表单动画对象
    const boxTransition = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.boxTransition = boxTransition;
    //组件动画对象
    const maskOpacityChange = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.maskOpacityChange = maskOpacityChange;
  }
})