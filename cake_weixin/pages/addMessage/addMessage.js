// pages/addMessage/addMessage.js
Page({
selectImg:function(){
    // 选中一张图片
    wx.chooseImage({
        count:1,
        sizeType:["compressed"],
        sourceType:["camera","album"],
        success: function(res) {
            var files = res.tempFilePaths;
            wx.uploadFile({
                url: getApp().globalData.baseUrl+'/upload_message',
                filePath: files[0],
                name: 'mypic',
                header:{
                    "content-Type":"multipart/form-data"
                },
                formData:{
                    pid:19,
                    pname:"数字蜡烛"
                },
                success:function(res){
                    console.log(res);
                }
            })
        },
    })
    // 将图片上传
},
  /**
   * 页面的初始数据
   */
  data: {
  
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