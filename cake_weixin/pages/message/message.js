// pages/message/message.js
Page({
  jumpToDetail:function(e){
    wx.navigateTo({
      url: '/pages/messageDetails/messagedDetails?cdid=' + e.currentTarget.dataset.cdid,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
loadMore:function(){
    // 1.如果已经没有下一页停止函数执行
    if(!this.data.hasMore){
        return;
    }
    // 2.获得二个参数pno pageSize
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    // 3.创建ajax请求
    wx.request({
        url: getApp().globalData.baseUrl+'/getMessage',
        data:{pno:pno,pageSize:ps},
        success:res=>{
             // 4.接收返回数据
            // 5.拼接数组
            var rows = this.data.list.concat(res.data.data);
            console.log(rows);
            for(var  item of rows){
                item.ctime = item.ctime.slice(0,10);
            }
            // 6.获取总页数判断是否有下一页
            var pageCount = res.data.pageCount;
            var flag = pno < pageCount;
            // 7.将返回数据保存data属性
            this.setData({
                list:rows,
                hasMore:flag,
                pageIndex:pno
            })
            // 8.添加动态效果 添加“加载动画”
            wx.showLoading({
                title: '正在加载数据……',
            })
            setTimeout(function(){wx.hideLoading()},500)
            // 9.“加载动画”隐藏
        }
    })
   
},
  /**
   * 页面的初始数据
   */
  data: {
    isRedIn:false,
    red_url:getApp().globalData.baseUrl+'/img/red2.png',
    list:[],
    pageIndex:0,
    hasMore:true,
    pageSize:4
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
    setTimeout(() => {
      this.setData({ isRedIn: true });
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({ isRedIn: false });
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
    wx.startPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})