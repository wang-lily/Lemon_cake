// components/profile-manager/ProfileManager.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
        {id:1,name:"订单列表",url:"/pages/building/buiding"},
        { id: 2, name: "优惠券管理",url:"/pages/building/buiding" },
        { id: 3, name: "红包管理",url:"/pages/building/buiding" },
        { id: 4, name: "添加消息",url:"/pages/building/buiding" },
        { id: 5, name: "添加商品", url:"/pages/addMessage/addMessage" },
        { id: 6, name: "联系我们",url:"/pages/building/buiding" },
        { id: 7, name: "商家公告",url:"/pages/building/buiding" }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      handleTap:function(e){
          wx.navigateTo({
                url: e.target.dataset.url,
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
          })
      }
  }
})
