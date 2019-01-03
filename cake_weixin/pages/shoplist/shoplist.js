// pages/shoplist/shoplist.js
Page({
  loadMore:function(){
    // 加载下一页数据
    // 获取二个数值pno pageSize
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    // 发送ajax请求
    wx.request({
        url: 'http://127.0.0.1:3002/find_cake_lists',
      data:{pno:pno,pageSize:ps,cakeClass:5},
      success:res=>{
        // console.log(res.data.data);
        var rows = this.data.list.concat(res.data.data);
        this.setData({
            list:rows,
            pageIndex:pno
            });
            wx.showLoading({
                title: '正在努力加载数据……',
            });
            setTimeout(function(){
                wx.hideLoading();
            },2000);
            // console.log(res.data.data);
      }
    })
    // 保存返回数据
    // 显示加载动画
    // 在shoplist.wxml显示列表数据
    // 上拉触顶加载下一页
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageIndex:0,
    pageSize:7
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
      this.loadMore();
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