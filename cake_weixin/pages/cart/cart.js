// pages/cart/cart.js
Page({
  //计算总价
  computTotalPrice:function(){
    var cartList = this.data.cartList;
    var total = 0;
    for(var item of cartList){
      if(item.checked){
        total += Number(item.count * item.specs[item.checkedSpecIndex].nowPrice);
      }   
    }
    total = total.toFixed(2);
    this.setData({
      'selectAll.totalPrice':total
    })
  },
  //列表单个checkbox点击 事件
  handleSelectOne:function(e){
    var index = e.target.dataset.index;
    this.setData({
      [`cartList[${index}].checked`]:!this.data.cartList[index].checked
    })
  },
  // 列表的checkbox Change事件
  checkboxChange:function(e){
    var values = e.detail.value;
    if(values.length==this.data.cartList.length){
      this.setData({
        'selectAll.checked':true
      })
    }else{
      this.setData({
        'selectAll.checked':false
      })
    }
    if(values.length==0){
      var total = 0.00
    }else{
      var total = values.reduce((total,value)=>{
        return Number(total)+Number(value);
      })
    }
    total = Number(total).toFixed(2)
    this.setData({ 
      'selectAll.totalPrice':total
    })
  },
  // 点击增加或减少按钮的事件
  handleButtonTap:function(e){
    var item = e.target.dataset.item;
    var index = e.target.dataset.index;
    var num = Number(e.target.dataset.num);
    var totalPrice = Number(this.data.selectAll.totalPrice);
    var ItemNowPrice = Number(item.specs[item.checkedSpecIndex].nowPrice)
    if(item.checked){
      var total = (totalPrice+ItemNowPrice*num).toFixed(2);
      this.setData({
        'selectAll.totalPrice':total
      })
    }  
    this.setData({
      [`cartList[${index}].count`]:item.count+num,
    })
    
  },
  // 全选checkbox Change事件
  selectAllChange:function(e){
    this.setData({
      'selectAll.checked':!this.data.selectAll.checked
    })
    var total = 0.00;
    if(this.data.selectAll.checked){
      var tmpList = this.data.cartList;
      for(var item of tmpList){
        total = Number(total) + item.specs[item.checkedSpecIndex].nowPrice*item.count;
        item.checked = true;
      }
    }else{
      tmpList = this.data.cartList;
      for(var item of tmpList){
        item.checked = false;
      } 
    }
    total = Number(total).toFixed(2);
    this.setData({
      cartList:tmpList,
      'selectAll.totalPrice':total
    })
  },
  //初始化数据
  ininitData:function(){
    var value = wx.getStorageSync('cart');
    if(!value){
     return;
    }
    var cartList = JSON.parse(value);
    if(cartList.length==0){
      return;
    }
    var total = 0;
    var selectAllChecked = true;
    for(var item of cartList){
      if(item.checked){
        total += item.specs[item.checkedSpecIndex].nowPrice*item.count;
      }else{
        selectAllChecked = false
      }
    }
    total = Number(total).toFixed(2)
    this.setData({ 
      cartList:cartList,
      'selectAll.totalPrice':total,
      'selectAll.checked':selectAllChecked
    })
  },
  //规格改变事件
  changeSpec:function(e){
    var index = e.target.dataset.index;
    var count = this.data.cartList[index].count;
    var tmpList = this.data.cartList[index].specs;
    var itemList = [];
    for(var item of tmpList){
      itemList.push(item.spec);
    }
    wx.showActionSheet({
      itemList: itemList,
      itemColor: '',
      success: (res)=>{
        var checkedSpecIndex = res.tapIndex;
        var checkedSpecTotal = tmpList[checkedSpecIndex].total;
        if(checkedSpecTotal<count){
          wx.showModal({
            title: '提示',
            content: `您所选的商品(规格:${tmpList[checkedSpecIndex].spec})数量不足${count},如确定请从新选择数量！`,
            success:(res)=>{
              //修改被选中规格的下标重置该规格的数量,重新计算总价
              if(res.confirm){
                this.setData({
                  [`cartList[${index}].count`]:1,
                  [`cartList[${index}].checkedSpecIndex`]:checkedSpecIndex
                })
                this.computTotalPrice();
              }
            }
          })
        }else{
          this.setData({
            //修改被选中规格的下标
            [`cartList[${index}].checkedSpecIndex`]:checkedSpecIndex
          })
          //重新计算总价
          this.computTotalPrice();
        }
      }
    })
  },
  //清空购物车
  clearCart:function(){
    this.setData({
      cartList:[]
    });
    // getApp().globalData.cart = [];
    wx.removeStorage({
      key: 'cart',
      success:(res)=>{
        wx.showToast({
          title: '清空完毕',
          icon: 'success'
        })
      }
    })
  },
  //更新缓存中的购物车
  updateStorageCart:function(){
    var cart = this.data.cartList;
    wx.setStorage({
      key: 'cart',
      data: JSON.stringify(cart),
      fail:function(res){
        console.log(res);
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    discountImg_url:getApp().globalData.baseUrl + '/img/discount.png',
    cartList :[],
    selectAll:{
      checked:false,
      totalPrice:(0.00).toFixed(2)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ininitData();
    
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
    this.ininitData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.updateStorageCart();
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