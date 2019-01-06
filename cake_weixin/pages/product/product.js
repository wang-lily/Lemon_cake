// pages/product/product.js
Page({
    checkForm:function(e){
        console.log(e.detail);
        var pno = e.detail.value.pno;
        var pname = e.detail.value.pname;
        // console.log(pno);
        // console.log(pname);
        var reg = /^[a-z0-9]{6}$/i;
        if(!reg.test(pno)){
            wx.showToast({
                title: '商品格式不正确',
                icon:"none"
            });
            setTimeout(function(){
                wx.hideToast();
            },1500);
            return;
        }
        wx.request({
            url: getApp().globalData.baseUrl+'/addProduct',
            data: {
                pno,
                pname
            },
            success: res => {
                if (res.data.code > 0) {
                    wx.showToast({
                        title: '添加成功！',
                    });
                    setTimeout(function () {
                        wx.hideToast();
                    }, 1500)
                } else {
                    wx.showToast({
                        title: '添加失败！',
                    });
                    setTimeout(function () {
                        wx.hideToast();
                    }, 1500)
                }
            }
        })
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