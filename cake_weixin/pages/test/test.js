// pages/test/test.js
Page({
  handlePaid:function(){
    wx.login({

      success: function (res) {

        if (res.code) {

         var appid ='wx6c291757d0aa8241'

          var secret ='659155f59d89744c82b30fcba5cc7aff'
          
          var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + res.code + '&grant_type=authorization_code';

          wx.request({

            url: l,

            data: {},

            method: 'GET', 

           success: function (res) {

                   console.log(res);  //此处获取的数据中及包含openid

            }

          });

        } else {

          console.log('获取用户登录态失败！' + res.errMsg)

        }

      }

    });  
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