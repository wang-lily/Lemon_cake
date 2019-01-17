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
    var cart = []; 
      var value = wx.getStorageSync('cart');
      if(value){
       var cartList = JSON.parse(value);
       cartList.length!=0 && (cart = cart.concat(cartList));
      } 
      this.setData({
        checked:true
      })
      var cartIndex = this.data.cartIndex;
      if(cartIndex!==null){
         cart.splice(cartIndex,1);
      }
      cart.unshift(this.data);
      var key = 'cart';
      var newValue = JSON.stringify(cart);
      wx.setStorage({
          key: key,
          data: newValue,
          success:(res)=>{
             var cart =  wx.getStorageSync('cart')
            this.isJumpToCart(); 
          }
      })
  },
  //查询商品是否已存在于购物车,
  isInCartList:function(caid){
    var value = wx.getStorageSync('cart');
    if(value || value.length!=0){
        var cartList = JSON.parse(value);
        for(var i=0; i<cartList.length; i++){
            if(cartList[i].caid==caid){
                cartList[i].cartIndex = i;
                this.setData(cartList[i]);
                return true;
            }
        }
    }
    return false;
  },
  //初始化页面数据
  initData:function(options){
    var caid = options.caid;
    if(this.isInCartList(caid)){
        return;
    }
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
  },
//   按钮事件
handleButtonTap:function(e){
    var num = Number(e.target.dataset.num);
    this.setData({
        count: this.data.count += num
    })
},
handleRemarkChange:function(e){
    var value = e.detail.value;
    console.log(value)
    this.setData({
        remark:value
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
    title:"",
    remark:"",
    checked:true,
    cartIndex:null
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