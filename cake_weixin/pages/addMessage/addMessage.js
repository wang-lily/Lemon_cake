// pages/addMessage/addMessage.js
Page({
    //调用子组件上传图片方法，并追加图片url列表
   handleTap: function(){
    var UploadImg = this.selectComponent("#upload-img");
        UploadImg.selectImg(()=>{
            var l = this.data.imgList.length;
            var item = `imgList[${l}]`;
            this.setData({[item]:UploadImg.data.imgUrl});
        });     
   },
   getValues:function(e){
        this.data.specs = e.detail.values;
   },
  /**
   * 页面的初始数据
   */
  data: {
      imgList: [],
        remarks:[],
        specs:[],
      productClass: [
        { value: 1, name: "贺寿" }, 
        { value: 2, name: "情侣" },
        { value: 3, name: "结婚"},
        { value: 4, name: "儿童"},
        { value: 5, name: "早餐"},
        { value: 6, name: "鲜花"},
        { value: 7, name: "礼物"},
        { value: 8, name: "蜡烛"},
        { value: 9, name: "DIY"}
    ],
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