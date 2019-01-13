
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
            value: 9//范围1-9
          }
      },
  
    /**
     * 组件的初始数据
     */
    data: {
      imgList:[]
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
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
                      if(this.properties.imgTotal-successNum<this.properties.count){
                          this.properties.count = this.properties.imgTotal-successNum
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
  