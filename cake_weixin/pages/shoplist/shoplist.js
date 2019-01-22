// pages/shoplist/shoplist.js
Page({
  loadMore:function(){
    // 加载下一页数据
    // 获取二个数值pno pageSize
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    var cakeClass = this.cakeClass;
    // 发送ajax请求
    wx.request({
        url: getApp().globalData.baseUrl+'/find_cake_lists',
        data: { pno: pno, pageSize: ps, cakeClass: cakeClass},
      success:res=>{
        var tmpList = res.data.data;
        for(var item of tmpList){
            var tmpSpec = JSON.parse(item.specs)[0];
            item.oldPrice = Number(tmpSpec.oldPrice).toFixed(2);
            item.discount = Number(tmpSpec.discount).toFixed(2);
            item.nowPrice = Number(tmpSpec.oldPrice * tmpSpec.discount/10).toFixed(2);
            item.spec = tmpSpec.spec;
        }
        var rows = this.data.list.concat(tmpList);
        this.setData({
            list:rows,
            pageIndex:pno
            });
            wx.showLoading({
                title: '加载中...',
            });
            setTimeout(function(){
                wx.hideLoading();
            },2000);
      }
    })
    // 保存返回数据
    // 显示加载动画
    // 在shoplist.wxml显示列表数据
    // 上拉触顶加载下一页
  },
  jumpToDetails:function(e){
    var caid = e.currentTarget.dataset.caid;
    var discount = e.currentTarget.dataset.discount;
    var oldPrice = e.currentTarget.dataset.oldprice;
    var nowPrice = e.currentTarget.dataset.nowprice;
    var spec = e.currentTarget.dataset.spec;
    var url = `/pages/shopdetails/shopdetails?oldPrice=${oldPrice}&nowPrice=${nowPrice}&caid=${caid}&discount=${discount}&spec=${spec}`;
    wx.navigateTo({
      url: url
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    isManager:false,
    list:[],
    pageIndex:0,
    pageSize:7,
    cakeClass:0,
    navTitle:"Lemon"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.cakeClass = options.cakeClass;
    wx.setNavigationBarTitle({
      title:"Lemon-"+options.title
    })
    if (this.cakeClass==9){

    }
    else{
        this.loadMore();
    }
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
    this.setData({
      isManager:getApp().globalData.userInfo.isManager
    })
    console.log(this.data.isManager)
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
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