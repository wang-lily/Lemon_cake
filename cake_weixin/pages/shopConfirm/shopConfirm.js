// pages/shopConfirm/shopConfirm.js
Page({
  handleToCart:function(){
      //发送请求到服务器，成功后提示
      wx.showModal({
          title: '添加成功',
          content: '查看购物车列表？',
          showCancel: true,
          cancelText: '取消',
          cancelColor: '',
          confirmText: '确定',
          confirmColor: '',
          success: function(res) {
              if(res.confirm){
                  wx.switchTab({
                      url: '/pages/cart/cart',
                      success: function (res) { },
                      fail: function (res) { },
                      complete: function (res) { },
                  })
              }      
          },
          fail: function(res) {},
          complete: function(res) {},
      })
  },
  /**
   * 页面的初始数据
   */
  data: {
    spec: [{ value: 1, name: "6英寸" }, { value: 2, name: "8英寸" }, { value: 3, name: "12英寸"}],
    imgUrl: getApp().globalData.baseUrl +'/img/child15.png'
  
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