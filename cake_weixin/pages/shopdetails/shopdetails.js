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
    jumpToSet:function(e){
      wx.navigateTo({
        url: '/pages/addMessage/addMessage?caid='+e.target.dataset.caid
      })
    },
  /**
   * 页面的初始数据
   */
  data: {
    isManager:false,
    isInCart:false,
    caid:0,
    discount:0,
    oldPrice:0,
    nowPrice:0,
    spec:"",
    detail:{},
    imgList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var value = wx.getStorageSync('cart');
    if(value){
      var tmpList = JSON.parse(value);
      for(var item of tmpList){
        if(item.caid===options.caid){
          this.setData({isInCart:true});
          break;
        }else{
          console.log(tmpList.indexOf(options.caid))
        }
      }
    }
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
    this.setData({isManager:getApp().globalData.userInfo.isManager})
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