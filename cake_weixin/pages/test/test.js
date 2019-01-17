// pages/test/test.js
Page({
  in:function(){
    this.setData({
      remarkBoxShow:true
    })
    setTimeout(()=>{
      this.animation1.translateY(-270).step();
      this.animation2.opacity(1).step();
      this.setData({ 
        animationData1:this.animation1.export(),
        animationData2:this.animation2.export()
      })
    },1)
  },
  out:function(){
    this.animation1.translateY(0).step();
    this.animation2.opacity(0).step();
    this.setData({ 
      animationData1:this.animation1.export(),
      animationData2:this.animation2.export()
    })
    setTimeout(()=>{
      this.setData({
        remarkBoxShow:false
      })
    },1000)  
  },
  handleRemark:function(){
    this.in();
  },
  handleConfirm:function(){
    this.out();
  },
  handleCancel:function(){
    this.out();
  },
  
  /**
   * 页面的初始数据
   */
  data: {
    remarkBoxShow:false,
    animationData1:{},
    animationData2:{}
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
    const animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation1 = animation1;
    const animation2 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation2 = animation2;
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