// pages/test/test.js
Page({
  initData:function(){
    var list = [];
    for(var i=0; i<50; i++){
      list.push("test data" + i);
    }
    this.setData({list:list})
  },
  showBtn:function(){
    this.setData({
      active:true
    });
  },
  toTop:function(){
    wx.pageScrollTo({
      scrollTop:0,
      duration:300
    }) 
    this.setData({
      active:false
    });
  },
  
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    active:false
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData();
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
    this.showBtn();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})