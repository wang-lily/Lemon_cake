// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
       { price:39, num:1,title:"儿童蛋糕001",img_url:getApp().globalData.baseUrl + '/img/child15.png',  spec:"6英寸",caid:12},
       { price:39, num:2,title: "儿童蛋糕001",img_url: getApp().globalData.baseUrl + '/img/child12.png', spec: "8英寸" ,caid:12},
       {price:39, num:4, title: "儿童蛋糕001",img_url: getApp().globalData.baseUrl + '/img/child13.png', spec: "12英寸" ,caid:12},
       { price:39, num:1,title: "儿童蛋糕001", img_url: getApp().globalData.baseUrl + '/img/child16.png', spec: "6英寸" ,caid:12}
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