// pages/home/home.js
Page({
    // 跳到列表页
    handleJump:function(e){
        if (e.target.dataset.id==9){
            wx.navigateTo({
                url: '/pages/building/buiding',
            })
            return;
        }
        wx.navigateTo({
            url: '/pages/shoplist/shoplist?cakeClass=' + e.target.dataset.id+'&title=' + e.target.dataset.title,
        })
    },
    // 跳到优惠券领取页面
    getCoupon(){
       
    },
    // 创建动画对象
    createAnimation:function(){
        this.noteAnimation = wx.createAnimation({
            duration: 7000,
            timingFunction: "linear",
            delay: 1,
            transformOrigin: '50% 50% 0',
        })
    },
    // 初始化动画数据并执行动画
    initAnimationData:function(){
        var deviceWidth = wx.getSystemInfoSync().windowWidth;
        this.timer = setInterval(() => {
            this.noteAnimation.translateX(-deviceWidth).step();
            this.noteAnimation.translateX(100).step({ duration: 0 });
            this.setData({
                noteAnimation: this.noteAnimation.export()
            })
        }, 6000)
    },
  /**
   * 页面的初始数据
   */
  data: {
      discountImg_url: getApp().globalData.baseUrl + "/img/discount.png",
      showCoupon:false,
    list:[
      {img_url:getApp().globalData.baseUrl+"/img/carousel09.png"},
      { img_url:getApp().globalData.baseUrl+"/img/carousel08.png"},
      { img_url:getApp().globalData.baseUrl+"/img/carousel06.png"},
      { img_url:getApp().globalData.baseUrl+"/img/carousel04.png"}
    ],
    navlist:[
      { id: 1, img_url:getApp().globalData.baseUrl+"/img/birthday.png",title:"贺寿"},
      { id: 2, img_url: getApp().globalData.baseUrl+"/img/lover.png", title: "情侣" },
      { id: 3, img_url: getApp().globalData.baseUrl+"/img/merry.png", title: "结婚" },
      { id: 4, img_url: getApp().globalData.baseUrl+"/img/child.png", title: "儿童" },
      { id: 5, img_url: getApp().globalData.baseUrl+"/img/breakfast.png", title: "早餐" },
      { id: 6, img_url: getApp().globalData.baseUrl+"/img/flower.png", title: "鲜花" },
      { id: 7, img_url: getApp().globalData.baseUrl+"/img/gift.png", title: "礼物" },
      { id: 8, img_url: getApp().globalData.baseUrl+"/img/candle.png", title: "蜡烛" },
      { id: 9, img_url: getApp().globalData.baseUrl+"/img/DIY.png", title: "DIY" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.createAnimation();
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
      this.initAnimationData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      clearInterval(this.timer);
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