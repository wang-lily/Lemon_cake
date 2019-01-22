// pages/addMessage/addMessage.js
Page({
//提示框
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
    formVerify(tmpData){
        var data = this.data.data;
        if(!data.title.trim()){
           this.myToast('请填写商品标题');
            return false;
        }
        if(!data.headerImg){
            this.myToast('请上传商品头图');
            return false;
        }
        if(data.imgList.length==0){
            this.myToast('请至少上传1张细节图');
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
        if(tmpData.msg){
            this.myToast(tmpData.msg);
            return false;
        }
        if(!this.arryVerifty(data.alert)){
            this.myToast('请至少填写一项商品提示，如没有请填写"无"');
            return false;
        }   
        return true;
    },
    //添加商品
    addProduct:function(dataObj){
        var data = JSON.stringify(dataObj);
        var url = this.data.baseUrl+'/addProduct';
        wx.request({
            url: url,
            method:'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data:'data=' + data,
            success: function(res) {
                console.log(res);
            }
        })
    },
     //更改商品信息
    updateProduct:function(dataObj){
        var tmpDataObj = Object.assign(dataObj,{caid:this.data.caid});
        var data = JSON.stringify(tmpDataObj);
        var url = this.data.baseUrl+'/updateProduct';
        wx.request({
            url: url,
            method:'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data:'data=' + data,
            success: function(res) {
                console.log(res);
            }
        })
    },
   //提交数据
   formSubmit(e){
    //    获取组件的值
        var headerImg = this.selectComponent("#header-img");
        var imgList = this.selectComponent("#detail-imgs");
       var specs = this.selectComponent("#specs");
       var alert = this.selectComponent("#alert");
       var tmpData = specs.postInputMsg();
       this.data.data.headerImg = headerImg.postImgList()[0];
       this.data.data.imgList = imgList.postImgList();
       this.data.data.specs = tmpData.dataList;
       this.data.data.alert = alert.postInputGroupValues();
    //    获取其他表单元素的值
        this.data.data.title = e.detail.value.title;
        this.data.data.classType = e.detail.value.classType;
        this.data.data.desc = e.detail.value.desc;
        if(this.formVerify(tmpData)){
            //上传数据到服务器
            if(this.data.caid>0){
                //更改商品信息
                this.updateProduct(this.data.data);
            }else if(this.data.caid===0){
                //添加商品信息
                this.addProduct(this.data.data);
            }
        };
   },
//    初始化productClass
   initProductClass:function(pClass){
        if(!pClass){
            return;
        }
        var tmpList = this.data.productClass;
        for(var item of tmpList){
            if(item.value==pClass){
                item.checked = true
                break;
            }
        }
        this.setData({productClass:tmpList});   
   },
   //    初始化tableValues
   initTableValues:function(arr){
        var tmpList = arr;
        this.setData({'tableData.values':tmpList});
   },
   //加载商品数据
   loadDetail(caid){
    wx.request({
        url: getApp().globalData.baseUrl+'/productDetail',
        data: {caid:caid},
        success: (res)=>{
          var result = res.data
          if(result.code==1){
            var data = result.data[0];
            data.imgList = JSON.parse(data.imgList);
            data.alert = JSON.parse(data.alert);
            data.specs = JSON.parse(data.specs);
            data.headerImg = [{url:data.headerImg}];
            console.log(data);
            this.setData({
                'data.title':data.title,
                'data.headerImg':data.headerImg,
                'data.imgList':data.imgList,
                'data.desc':data.descr,
                'data.alert':data.alert
            }) 
            this.initProductClass(data.classType);   
            this.initTableValues(data.specs);
          }else{
            console.log(result.msg);
          }
        }
      })
   },
  /**
   * 页面的初始数据
   */
  data: {
        caid:0,
        baseUrl:getApp().globalData.baseUrl,
        data:{
            title:"",
            headerImg:"",
            imgList: [],
            classType:0,
            desc:"",
            specs:[],
            alert:[],
        },
        tableData:{
            colDesc: ["规格","原价","折扣","数量"],
            colDetail:[
                {name:"spec",type:"text",value:"",maxLength:9},
                {name:"oldPrice",type:"digit",value:"",maxLength:9},
                {name:"discount",type:"digit",value:"10",maxLength:9},
                {name:"total",type:"number",value:"",maxLength:9}
            ],
            values:[]
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
    var caid = options.caid;
    if(!caid){
        wx.setNavigationBarTitle({
            title:"Lemon-"+"添加商品"
        });
        return;
    }
    wx.setNavigationBarTitle({
        title:"Lemon-"+"修改商品信息"
    });
    this.setData({caid:caid});
    this.loadDetail(caid);
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