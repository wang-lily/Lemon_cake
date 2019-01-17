// pages/shopdetails/shopdetails.js
Page({
    //跳到商品确认页面
    jumpToComfirm:function(e){
      var headerImg = e.target.dataset.headerimg;
      var specs = e.target.dataset.specs;
      var title = e.target.dataset.title;
      var caid = e.target.dataset.caid;
        wx.navigateTo({
            url: `/pages/shopConfirm/shopConfirm?headerImg=${headerImg}&specs=${specs}&title=${title}&caid=${caid}`
        })
    },
    //加载商品详情
    loadDetail:function(){
      wx.request({
        url: getApp().globalData.baseUrl+'/productDetail',
        data: {caid:this.data.caid},
        success: (res)=>{
          var result = res.data
          if(result.code==1){
            var data = result.data[0];
            data.imgList = JSON.parse(data.imgList);
            data.alert = JSON.parse(data.alert);
            this.setData({
              detail:data
            });
          }else{
            console.log(result.msg);
          }
        }
      })
    },
  /**
   * 页面的初始数据
   */
  data: {
    caid:0,
    discount:0,
    oldPrice:0,
    nowPrice:0,
    spec:"",
    detail:{},
    imgList: [
      {img_url:getApp().globalData.baseUrl + "/img/child15.png"},
      {img_url:getApp().globalData.baseUrl + "/img/child19.png"},
      {img_url:getApp().globalData.baseUrl + "/img/child10.png"},
      {img_url:getApp().globalData.baseUrl + "/img/child12.png"},

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      caid:options.caid,
      discount:options.discount,
      oldPrice:options.oldPrice,
      nowPrice:options.nowPrice,
      spec:options.spec,
    })
    this.loadDetail();
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