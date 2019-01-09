// pages/proflie/profile.js
Page({
    loadHeaderImg: function(){
        wx.chooseImage({
            count:1,
            sizeType:["compressed"],
            sourceType:["camera","ablum"],
            success: (res)=>{
                console.log(res.tempFilePaths[0]);
                wx.uploadFile({
                    url: getApp().globalData.baseUrl+'/upload',
                    filePath: res.tempFilePaths[0],
                    name: 'mypic',
                    header:{
                        "Content-Type":"multipart/form-data"
                    },
                    success:(res)=>{
                        // console.log(res.tempFilePaths[0]);
                        console.log(JSON.parse(res.data));
                        wx.showToast({
                            title: '正在上传中……',
                            icon:'loading'
                        })
                        setTimeout(function(){
                            wx.hideToast();
                        },500)
                        this.setData({
                            headerImgUrl: getApp().globalData.baseUrl+''+JSON.parse(res.data).url.slice(8),
                        })
                        
                        

                    },
                    fail:function(){
                        wx.showModal({
                            title: '友情提示',
                            content: '系统升级中，请稍后再试',
                        })
                    }
                })
            },
        })
    },
    onMusicTap:function(){
        var isp = this.data.isPlayingMusic;
        if(isp){
            wx.pauseBackgroundAudio();
            this.setData({isPlayingMusic:false});
        }else{
            wx.playBackgroundAudio({
                dataUrl: getApp().globalData.baseUrl+'/MP3/bg.mp3',
            });
            this.setData({isPlayingMusic:true});
        }
    },
    handleTap:function(){
        wx.navigateTo({
            url: '/pages/addMessage/addMessage'
        })
    },
  /**
   * 页面的初始数据
   */
  data: {
      headerImgUrl:getApp().globalData.baseUrl+"/img/child.png",
      isPlayingMusic:false
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