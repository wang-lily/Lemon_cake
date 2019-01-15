// pages/test/test.js
Page({
  post:function(){
    var tb1 = this.selectComponent("#tb1");
    tb1.postInputGroupValues();
  },
  /**
   * 页面的初始数据
   */
  data: {
    title:"商品信息",
    colDesc: ["商品规格","商品原价","商品现价"],
    colDetail:[
      {name:"spec",type:"text",value:"",MaxLength:9},
      {name:"oldPrice",type:"digit",value:""},
      {name:"nowPrice",type:"digit",value:""}
    ],
    
    tableData:{
      title:"商品信息",
      colDesc: ["商品规格","商品原价","商品现价"],
      colDetail:[
        {name:"spec",type:"text",value:"",maxLength:9},
        {name:"oldPrice",type:"digit",value:"",maxLength:9},
        {name:"nowPrice",type:"digit",value:"",maxLength:9}
      ],
      itemTotal:6
    }
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