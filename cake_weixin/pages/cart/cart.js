// pages/cart/cart.js
Page({
  //列表单个checkbox点击 事件
  handleSelectOne:function(e){
    var index = e.target.dataset.index;
    this.setData({
      [`list[${index}].checked`]:!this.data.list[index].checked
    })
  },
  // 列表的checkbox Change事件
  checkboxChange:function(e){
    var values = e.detail.value;
    if(values.length==this.data.list.length){
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
  // 点击减少按钮的事件
  descNum:function(e){
    var item = e.target.dataset.item;
    var index = e.target.dataset.index;
    var descDisabled = false;
    if(item.num==1){
      descDisabled = true;
    }
    if(item.checked){
      var total = Number(this.data.selectAll.totalPrice-item.price).toFixed(2);
      this.setData({
        'selectAll.totalPrice':total
      })
    }  
    this.setData({
      [`list[${index}].num`]:item.num-1,
      [`list[${index}].descDisabled`]:descDisabled
    })
    
  },
  // 点击增加按钮的事件
  ascNum:function(e){
    var item = e.target.dataset.item;
    var index = e.target.dataset.index;
    // var ascDisabled = false;
    // if(item.num==1){
    //   ascDisabled = true;
    // }
    if(item.checked){
      var total = (Number(this.data.selectAll.totalPrice)+Number(item.price)).toFixed(2);
      this.setData({
        'selectAll.totalPrice':total
      })
    }
    
    this.setData({
      [`list[${index}].num`]:item.num+1,     
      [`list[${index}].descDisabled`]:false
      // [`list[${index}].descDisabled`]:ascDisabled
    })
  },
  // 全选checkbox Change事件
  selectAllChange:function(e){
    this.setData({
      'selectAll.checked':!this.data.selectAll.checked
    })
    var total = 0.00;
    if(this.data.selectAll.checked){
      var tmpList = this.data.list;
      for(var item of tmpList){
        total = Number(total) + item.price*item.num;
        item.checked = true;
      }
    }else{
      tmpList = this.data.list;
      for(var item of tmpList){
        item.checked = false;
      } 
    }
    total = Number(total).toFixed(2);
    this.setData({
      list:tmpList,
      'selectAll.totalPrice':total
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    discountImg_url:getApp().globalData.baseUrl + '/img/discount.png',
    list:[
       { price:39, num:1,title:"儿童蛋糕001",img_url:getApp().globalData.baseUrl + '/img/child15.png',  spec:"6英寸",caid:12},
       { price:39, num:2,title: "儿童蛋糕001",img_url: getApp().globalData.baseUrl + '/img/child12.png', spec: "8英寸" ,caid:12},
       {price:39, num:4, title: "儿童蛋糕001",img_url: getApp().globalData.baseUrl + '/img/child13.png', spec: "12英寸" ,caid:12},
       { price:39, num:1,title: "儿童蛋糕001", img_url: getApp().globalData.baseUrl + '/img/child16.png', spec: "6英寸" ,caid:12}
    ],
    selectAll:{
      checked:false,
      totalPrice:(0.00).toFixed(2)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(var item of this.data.list){
      item.checked = true;
      item.descDisabled = false;
      item.ascDisabled = false;
    }
    var tmpList = this.data.list;
    var total = 0;
    for(var item of tmpList){
      total += item.price*item.num;
    }
    total = Number(total).toFixed(2)
    this.setData({ 
      list:tmpList,
      'selectAll.totalPrice':total,
      'selectAll.checked':true
    })
    
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