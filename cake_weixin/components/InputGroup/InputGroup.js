// components/InputGroup/InputGroup.js

Component({
    //外部引入样式
    // externalClasses: ['title', 'my - input', 'btn', 'btn- asc', 'sm - muted', ' item- remarks', 'align- between','point'],
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
        type:String,
        value:"标题"
    },
    itemMaxLength:{
        type:Number,
        value:5
    },
    itemTotal:{
        type:Number,
        value:6
    },
    values:{
        type:Array,
        value:[{value:""}]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      inputGroup: {
          noDel: true,
          noAdd: false
      }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //   初始化数据
      initData:function(){
          if(this.data.values.length==0){
              this.setData({values:[{value:""}]});
          }
      },
      //添加项目
      addItem: function (e) {
          var num = e.target.dataset.num;
          var tmpList = this.data.values;
          tmpList.push({ value: "" });
          this.setData({
            values: tmpList,
              [`inputGroup.noDel`]: false
          });
          if (this.data.values.length == num) {
              this.setData({
                  [`inputGroup.noAdd`]: true
              });
          }
      },
      //删除项目
      deleteItem: function (e) {          
          var index = e.target.dataset.index;
          var tmpList = this.data.values;
          tmpList.splice(index, 1);
          this.setData({
              values: tmpList,
              [`inputGroup.noAdd`]: false
          })
          if (this.data.values.length == 1) {
              this.setData({
                  [`inputGroup.noDel`]: true
              })
          }
      },
      //动态修改input的value
      handleInput: function (e) {
          var index = e.target.dataset.index;
          var tmpList = this.data.values;
          tmpList[index].value = e.detail.value;
          this.setData({
              values: tmpList,
          })
      },
      postInputGroupValues(){
        return this.data.values;
      }
  },
  attached:function(){
    this.initData()
  },
  ready:function(){
   
  }
})
