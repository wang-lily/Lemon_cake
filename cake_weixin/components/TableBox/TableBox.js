// components/table/table.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tableData:{
        type:Object,
        value:{
            //两个属性长度必须保存一致
            colDesc: ["head1","head2","head3"],
            colDetail:[
                {name:"item1",type:"text",maxLength:9,value:""},
                {name:"item2",type:"digit",maxLength:9,value:""},
                {name:"item3",type:"number",maxLength:9,value:""}
            ],
        }
    },
    title:{
        type:String,
        value:"title"
    },
    maxRow:{
        type:Number,
        value:6
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      inputGroup: {
          noDel: true,
          noAdd: false,
        body:[]
      }
  },

  /**
   * 组件的方法列表
   */
  methods: {
      //初始化table的body
      initBody:function(){
        var tmpList = this.data.inputGroup.body;
        var str = JSON.stringify(this.properties.tableData.colDetail);
        var tmpArr = JSON.parse(str);
        tmpList.push(tmpArr);
        this.setData({
            [`inputGroup.body`]: tmpList,
        })  
      },
    //添加项目
    addItem: function (e) {
        var num = e.target.dataset.num;
        var tmpList = this.data.inputGroup.body;
        var str = JSON.stringify(this.properties.tableData.colDetail);
        var tmpArr = JSON.parse(str);
        tmpList.push(tmpArr);
        this.setData({
            [`inputGroup.body`]: tmpList,
            [`inputGroup.noDel`]: false
        });
        if (this.data.inputGroup.body.length == num) {
            this.setData({
                [`inputGroup.noAdd`]: true
            });
        }
    },
    //删除项目
    deleteItem: function (e) {  
        if(this.data.inputGroup.noDel){
            return;
        }
        wx.showModal({
            title: '提示',
            content: '确认删除此项吗？',
            success:(res)=>{
                if(res.confirm){
                    var index = e.target.dataset.i;
                    var tmpList = this.data.inputGroup.body;
                    tmpList.splice(index, 1);
                    this.setData({
                        [`inputGroup.body`]: tmpList,
                        [`inputGroup.noAdd`]: false
                    })
                    if (this.data.inputGroup.body.length == 1) {
                        this.setData({
                            [`inputGroup.noDel`]: true
                        })
                    }
                }
            }
        })        
    },
    //动态修改input的value
    handleInput: function (e) {
        var i = e.target.dataset.i;
        var j = e.target.dataset.j;
        var tmpList = this.data.inputGroup.body;
        tmpList[i][j].value = e.detail.value;
        this.setData({
            [`inputGroup.body`]: tmpList,
        })
    },
    //发送value值给调用此组建的对象
    postInputMsg(){
        // var dataList = [];
        var data = {
            dataList:[],
            msg:""
        }
        var tmpList = this.data.inputGroup.body;
        for(var arr of tmpList){
            var tmpObj = {};
            for(var obj of arr){
                if(!obj.value){
                    data.msg = `${this.properties.title}没填写完善,请完善后再提交！`
                }
                tmpObj[obj.name] = obj.value;
            }
            data.dataList.push(tmpObj);
        }
      return data;
    }
  },
  ready:function() {
      this.initBody();
  },
})
