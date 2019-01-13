// pages/addMessage/addMessage.js
Page({
   getValues:function(e){
        this.data.data.specs = e.detail.values;
   },
   myToast(str){
    wx.showToast({
        title: str,
        icon: 'none',
        duration:1200
    })
   },
//    验证是否数组内每一value项都为空值
    arryVerifty(arr){
        for(var item of arr){
            if(item.value.trim()){
                return true;
            }
        }
        return false;
    },
    //表单验证
    formVerify(){
        var data = this.data.data;
        if(!data.title.trim()){
           this.myToast('请填写商品标题');
            return false;
        }
        if(data.imgList.length==0){
            this.myToast('请至少上传1张图片');
            return false;
        }
        if(!data.classType){
            this.myToast('请选择商品类别');
            return false;
        }
        if(!data.desc.trim()){
            this.myToast('请填写商品描述');
            return false;
        }
        if(!data.total.trim()){
            this.myToast('请填写商品数量');
            return false;
        }else if(!(data.total>0) || String(data.total).indexOf(".")!=-1){
            this.myToast("请填写商品数量为大于0的整数");
            return false;
        }
        if(data.oldPrice && !(data.oldPrice>0)){
            this.myToast('商品原价值必须大于0.00,如没有,可不必填写');
            return false;
        }
        if(!data.nowPrice.trim()){
            this.myToast('请填写商品现价');
            return false;
        }else if(!(data.nowPrice>=0)){
            this.myToast('请填写商品现价,价格值不能必须大于或等于0.00');
            return false;
        }
        if(!this.arryVerifty(data.specs)){
            this.myToast('请至少填写一项商品规格');
            return false;
        }
        if(!this.arryVerifty(data.remarks)){
            this.myToast('请至少填写一项商品提示，如没有请填写"无"');
            return false;
        }   
        return true;
    },
   //提交数据
   formSubmit(e){
    //    获取组件的值
        var imgList = this.selectComponent("#upload-img");
       var specs = this.selectComponent("#specs");
       var remarks = this.selectComponent("#remarks");
       this.data.data.imgList = imgList.postImgList();
       this.data.data.specs = specs.postInputGroupValues();
       this.data.data.remarks = remarks.postInputGroupValues();
    //    获取其他表单元素的值
        this.data.data.title = e.detail.value.title;
        this.data.data.classType = e.detail.value.classType;
        this.data.data.desc = e.detail.value.desc;
        this.data.data.total = e.detail.value.total;
        this.data.data.oldPrice = e.detail.value.oldPrice;
        this.data.data.nowPrice = e.detail.value.nowPrice;
        if(this.formVerify()){
            //上传数据到服务器
            var data = JSON.stringify(this.data.data);
            console.log(data);
            wx.request({
                url: this.data.baseUrl+'/addProduct',
                method:'POST',
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data:'data=' + data,
                success: function(res) {
                    console.log(res);
                }
            })
        };
   },
  /**
   * 页面的初始数据
   */
  data: {
        baseUrl:getApp().globalData.baseUrl,
        data:{
            title:"",
            imgList: [],
            classType:0,
            desc:"",
            total:"",
            oldPrice:0.00,
            nowPrice:0.00,
            specs:[],
            remarks:[],
        },
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