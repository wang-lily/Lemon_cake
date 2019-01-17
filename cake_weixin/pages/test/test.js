// pages/test/test.js
Page({
  handleRemark:function(){
    this.animation.translateY(-270).step();
    this.setData({
      remarkBoxShow:true,
      animationData:this.animation.export({duration:1000})
    })
  },
  handleConfirm:function(){
    // this.setData({
    //   remarkBoxShow:false,
    //   activedStyle:"out"
    // })
    this.animation.translateY(270).step();
    this.setData({
      remarkBoxShow:false,
      animationData:this.animation.export({duration:1000})
    })
  },
  
  /**
   * 页面的初始数据
   */
  data: {
    remarkBoxShow:false,
    activedStyle:"out",
    animationData:{}
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
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })
    this.animation = animation;
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