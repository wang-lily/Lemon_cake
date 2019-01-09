// components/drawImg/drawImg.js
Component({
  /**
   * 组件的属性列表
   */
    properties: {
        imgUrl: {
            type: String,
            value: ""
        }
    },

  /**
   * 组件的初始数据
   */
  data: {
      imgUrl: getApp().globalData.baseUrl + '/img/carousel09.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
      
  }
})
