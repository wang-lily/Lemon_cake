// pages/shopConfirm/shopConfirm.js
Page({
    // 单选框改变事件
    radioChange:function(e){
        var index = e.detail.value;
        this.setData({
            checkedSpecIndex:index,
            count:1
        })
    },
    //是否跳转到购物车页面
    isJumpToCart:function(){
        wx.showModal({
            title: '添加成功',
            content: '查看购物车列表？',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '',
            confirmText: '确定',
            confirmColor: '',
            success: (res)=>{
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
    // 添加到购物车
  handleToCart:function(){
    //   wx.clearStorage()
      wx.getStorage({
          key: 'cart',
          success:(res)=>{
              console.log(res)
          }
      })
      var key = 'cart';
      var data = this.data;
      //添加到购物车缓存
      var value = wx.getStorageSync(key);
    //   console.log(key)
      if(value){
          console.log(value)
          var newValue = JSON.parse(value);
      }else{
          var newValue = []      
      }
      newValue.push(data);
      newValue = JSON.stringify(newValue);
      console.log(newValue);
      wx.setStorage({
          key: key,
          data: newValue,
          success:(res)=>{
            console.log(res)
            // this.isJumpToCart(); 
          }
      })
  },
  //初始化页面数据
  initData:function(options){
    var caid = options.caid;
    var headerImg = options.headerImg;
    var title = options.title;
    var specs = options.specs;
    specs = JSON.parse(specs);
    for(var i=0; i<specs.length; i++){
        specs[i].nowPrice = Number(specs[i].oldPrice * specs[i].discount/10).toFixed(2);
        specs[i].oldPrice = Number(specs[i].oldPrice).toFixed(2);
    }
    this.setData({
        caid:caid,
        specs:specs,
        imgUrl:headerImg,
        title:title
    })
    console.log(this.data)
  },
//   按钮事件
handleButtonTap:function(e){
    var num = Number(e.target.dataset.num);
    this.setData({
        count: this.data.count += num
    })
},
  /**
   * 页面的初始数据
   */
  data: {
      caid:0,
      count:1,
    checkedSpecIndex:0,
    specs: [],
    imgUrl: getApp().globalData.baseUrl +'/img/child15.png',
    title:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData(options);
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