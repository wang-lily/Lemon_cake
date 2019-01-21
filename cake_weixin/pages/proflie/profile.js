// pages/proflie/profile.js
Page({
    // loadHeaderImg: function(){
    //     wx.chooseImage({
    //         count:1,
    //         sizeType:["compressed"],
    //         sourceType:["camera","ablum"],
    //         success: (res)=>{
    //             console.log(res.tempFilePaths[0]);
    //             wx.uploadFile({
    //                 url: getApp().globalData.baseUrl+'/upload',
    //                 filePath: res.tempFilePaths[0],
    //                 name: 'mypic',
    //                 header:{
    //                     "Content-Type":"multipart/form-data"
    //                 },
    //                 success:(res)=>{
    //                     console.log(JSON.parse(res.data));
    //                     wx.showToast({
    //                         title: '正在上传中……',
    //                         icon:'loading'
    //                     })
    //                     setTimeout(function(){
    //                         wx.hideToast();
    //                     },500)
    //                     this.setData({
    //                         headerImgUrl: getApp().globalData.baseUrl+''+JSON.parse(res.data).url.slice(8),
    //                     })    
    //                 },
    //                 fail:function(){
    //                     wx.showModal({
    //                         title: '友情提示',
    //                         content: '系统升级中，请稍后再试',
    //                     })
    //                 }
    //             })
    //         },
    //     })
    // },
    //跳转到添加商品页面
    handleTap:function(){
        wx.navigateTo({
            url: '/pages/addMessage/addMessage'
        })
    },
    //微信授权登录
    wxLogin:function(){
        wx.login({
            success: (res)=>{
                if(res.code) {
                    var appid ='wx6c291757d0aa8241';
                    var secret ='659155f59d89744c82b30fcba5cc7aff';
                    var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + res.code + '&grant_type=authorization_code';
                    wx.request({
                        url: l,
                        success: (res)=>{
                           var sessionKey = res.data.session_key;
                           var openId = res.data.openid;
                           getApp().globalData.userInfo.openId = openId;
                           getApp().globalData.userInfo.sessionKey = sessionKey;
                            //向服务器发请求确认用户信息
                            this.userConfirm(openId);   
                        }
                    })
                } else {
                    console.log(res.errMsg)
                }
            }
        })
    },
    //验证用户信息
    userConfirm:function(openId){
        if(!openId){
            return;
        }
        var url = getApp().globalData.baseUrl+"/manager_login";
        wx.request({
            url: url,
            method:'POST',
            data:"data="+openId,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: (res)=>{
                if(res.data.code==201){
                    this.setData({
                        isManager:true,
                        isLogin:true
                    })
                }else if(res.data.code==202){
                    this.setData({
                        isManager:false,
                        isLogin:true
                    })
                }else{
                    console.log("登录失败！")
                }
            }
        })
    },
  /**
   * 页面的初始数据
   */
  data: {
      src: getApp().globalData.baseUrl+"/img/loveme.png",
      isManager: false,
      isLogin: false
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