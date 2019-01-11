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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      specs: {
          noDel: true,
          noAdd: false,
          list: [{ value: "" }]
      }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 监听方法
      observe(obj, key, watchFun) {
          var val = obj[key]; // 给该属性设默认值
          Object.defineProperty(obj, key, {
              configurable: true,
              enumerable: true,
              set: function (value) {
                  val = value;
                  watchFun(value, val); // 赋值(set)时，调用对应函数
              },
              get: function () {
                  return val;
              }
          })


      //添加项目
      addItem: function (e) {
          var num = e.target.dataset.num;
          var desc = e.target.dataset.desc;
          var tmpList = this.data[desc].list;
          tmpList.push({ value: "" });
          this.setData({
              [`${desc}.list`]: tmpList,
              [`${desc}.noDel`]: false
          });
          if (this.data[desc].list.length == num) {
              this.setData({
                  [`${desc}.noAdd`]: true
              });
          }
      },
      //删除项目
      deleteItem: function (e) {
          var index = e.target.dataset.index;
          var desc = e.target.dataset.desc;
          var tmpList = this.data[desc].list;
          tmpList.splice(index, 1);
          this.setData({
              [`${desc}.list`]: tmpList,
              [`${desc}.noAdd`]: false
          })
          if (this.data[desc].list.length == 1) {
              this.setData({
                  [`${desc}.noDel`]: true
              })
          }
      },
      //动态修改input的value
      handleInput: function (e) {
          var index = e.target.dataset.index;
          var desc = e.target.dataset.desc;
          var tmpList = this.data[desc].list;
          tmpList[index].value = e.detail.value;
          console.log(e.target.dataset.index);
          this.setData({
              [`${desc}.list`]: tmpList,
          })
      }
  }
})
