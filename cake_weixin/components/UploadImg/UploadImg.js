
// components/UploadImg/UploadImg.js
Component({
    /**
     * 组件的属性列表
     */
      properties: {
          count: {
              type: Number,
              value: 3//范围1-9
          },
          imgTotal:{
            type: Number,
            value: 9//
          }
      },
  
    /**
     * 组件的初始数据
     */
    data: {
        activeIndex:"",
        top:0,
        left:0,
        initialTop:0,
        initialLeft:0,
        deltaX:0,
        deltaY:0,
        imgBoxWith:200,
        imgBoxHeight:200,
        style:"",

        isUpLoad:true,
        imgList:[]
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
        // 拖拽图片
        dragImg:function(e){
            var deltaX = this.data.deltaX;
            var deltaY = this.data.deltaY;
            var left = e.touches[0].clientX-deltaX;
            var top = e.touches[0].clientY-deltaY;
            this.setData({
                style:`top:${top}rpx;left:${left}rpx`
            })
        },
        // 长按使图片处于可拖动状态
        activeDrag:function(e){
            var initialLeft = e.target.offsetLeft;
            var initialTop = e.target.offsetTop;
            var clientX = e.touches[0].clientX;
            var clientY = e.touches[0].clientY;
            var deltaX = clientX-initialLeft;
            var deltaY = clientY-initialTop;
            var index = e.target.dataset.index;
            this.setData({
                deltaX:deltaX,
                deltaY:deltaY,
                top:initialTop,
                left:initialLeft,
                initialTop:initialTop,
                initialLeft:initialLeft,
                activeIndex:index,
                style:`top:${initialTop}rpx;left:${initialLeft}rpx`
            })
        },
        //点击预览图片
        previewImg:function(e){
            var index = e.target.dataset.index;
            this.setData({
                activeIndex:index
            })
            wx.previewImage({
                current:  this.data.imgList[index],
                urls:[ this.data.imgList[index].url]
            })

        },
        // 长按删除图片
        deleteImg:function(e){
            wx.showModal({
                title: '提示',
                content: '确定要删除此图片吗？',
                success:(res)=>{
                    if (res.confirm) {
                        var index = e.target.dataset.index;
                        var imgList = this.data.imgList;
                        imgList.splice(index, 1);
                        this.setData({
                            imgList:imgList,
                            isUpLoad:true
                        });
                        // 发送请求通知后台删除图片
                    }
                }
            })
        },
        // 上传文件
      uploadFile:function(files,callback){
          wx.showToast({
              title: '上传中...',
              icon: 'loading'
          })
          var count = files.length;
          var successNum = 0;
          var faildNum = 0;
          var tmpList = [];
          for(var file of files){
              wx.uploadFile({
                  url: getApp().globalData.baseUrl + '/upload',
                  filePath: file,
                  name: 'mypic',
                  header: {
                      "content-Type": "multipart/form-data"
                  },
                  formData: {
                  },
                  success: (res) => {
                      var data = JSON.parse(res.data);
                      if(data.code>0){
                          tmpList.push({url:data.url});
                          successNum++;
                      }else{
                          faildNum++;
                      }   
                      if(successNum+faildNum==count){
                        tmpList = this.data.imgList.concat(tmpList);
                        this.setData({
                            imgList:tmpList
                        });
                          callback(successNum,faildNum);
                      } 
                  }
              })
          }
      },
      // 上传图片
      selectImg:function() {
          // 选中图片
          wx.chooseImage({
              count: this.properties.count,
              sizeType: ["compressed"],
              sourceType: ["camera", "album"],
              success: (res) => {
                  // 将图片上传
                  var files = res.tempFilePaths;
                  this.uploadFile(files,(successNum,faildNum)=>{
                      if(faildNum===0){
                          wx.showToast({
                              title: '上传成功！',
                              icon: 'success',
                              duration:1200
                          })
                      }else{
                          wx.showToast({
                              title: `${successNum}张上传成功,${faildNum}张上传失败!`,
                              icon: 'none',
                              duration:1200
                          })
                      }
                      var tempImgCount = this.data.imgList.length;
                      if(this.properties.imgTotal-tempImgCount<this.properties.count){
                          this.properties.count = this.properties.imgTotal-tempImgCount
                      }
                      if(this.properties.count==0){
                        this.setData({isUpLoad:false});
                      }
                  })
              },
          })
      },
      // 向父组件传值
      postImgList:function(){
          return this.data.imgList;
      }
    }
  })
  