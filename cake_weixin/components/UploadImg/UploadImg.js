// components/UploadImg/UploadImg.js
Component({
  /**
   * 组件的属性列表
   */
    properties: {
        imgUrl: {
            type: String,
            value: ""
        }
    },

  /**
   * 组件的初始数据
   */
  data: {
      imgUrl: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectImg:function(callback) {
        // 选中一张图片
        wx.chooseImage({
            count: 1,
            sizeType: ["compressed"],
            sourceType: ["camera", "album"],
            success: (res) => {
                var files = res.tempFilePaths;
                wx.uploadFile({
                    url: getApp().globalData.baseUrl + '/upload',
                    filePath: files[0],
                    name: 'mypic',
                    header: {
                        "content-Type": "multipart/form-data"
                    },
                    formData: {
                        // pid: 19,
                        // pname: "数字蜡烛"
                    },
                    success: (res) => {
                        var data = JSON.parse(res.data);
                        this.setData({ imgUrl: data.url })
                        callback();
                    }
                })
            },
        })
        // 将图片上传
    },
  }
})
