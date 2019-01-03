// pages/home/home.js
Page({
    handleJump:function(e){
        if(e.target.dataset.id==5){
            wx.navigateTo({
                url: '/pages/shoplist/shoplist',
            })
        }
    },

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {img_url:"http://127.0.0.1:3002/img/carousel01.png"},
      { img_url:"http://127.0.0.1:3002/img/carousel08.png"},
      { img_url:"http://127.0.0.1:3002/img/carousel06.png"},
      { img_url:"http://127.0.0.1:3002/img/carousel04.png"}
    ],
    navlist:[
      { id: 1, img_url:"http://127.0.0.1:3002/img/birthday.png",title:"贺寿"},
      { id: 2, img_url: "http://127.0.0.1:3002/img/lover.png", title: "情侣" },
      { id: 3, img_url: "http://127.0.0.1:3002/img/merry.png", title: "结婚" },
      { id: 4, img_url: "http://127.0.0.1:3002/img/child.png", title: "儿童" },
      { id: 5, img_url: "http://127.0.0.1:3002/img/breakfast.png", title: "早餐" },
      { id: 6, img_url: "http://127.0.0.1:3002/img/flower.png", title: "鲜花" },
      { id: 7, img_url: "http://127.0.0.1:3002/img/gift.png", title: "礼物" },
      { id: 8, img_url: "http://127.0.0.1:3002/img/candle.png", title: "蜡烛" },
      { id: 9, img_url: "http://127.0.0.1:3002/img/DIY.png", title: "DIY" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})