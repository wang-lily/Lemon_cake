// components/table/table.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tableData:{
        type:Object,
        value:{
            title:"title",
            colDesc: ["head1","head2","head3"],
            colDetail:[
                {name:"spec",type:"text",maxLength:9,value:""},
                {name:"oldPrice",type:"digit",maxLength:9,value:""},
                {name:"nowPrice",type:"digit",maxLength:9,value:""}
            ],
            itemTotal:6
        }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      inputGroup: {
          noDel: true,
          noAdd: false,
        list:[]
      }
  },

  /**
   * 组件的方法列表
   */
  methods: {
      initList:function(){
        var tmpList = this.data.inputGroup.list;
        var str = JSON.stringify(this.properties.tableData.colDetail);
        var tmpArr = JSON.parse(str);
        tmpList.push(tmpArr);
        this.setData({
            [`inputGroup.list`]: tmpList,
        })  
      },
    //添加项目
    addItem: function (e) {
        var num = e.target.dataset.num;
        var tmpList = this.data.inputGroup.list;
        var str = JSON.stringify(this.properties.tableData.colDetail);
        var tmpArr = JSON.parse(str);
        tmpList.push(tmpArr);
        this.setData({
            [`inputGroup.list`]: tmpList,
            [`inputGroup.noDel`]: false
        });
        if (this.data.inputGroup.list.length == num) {
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
                    var tmpList = this.data.inputGroup.list;
                    tmpList.splice(index, 1);
                    console.log(tmpList)
                    this.setData({
                        [`inputGroup.list`]: tmpList,
                        [`inputGroup.noAdd`]: false
                    })
                    if (this.data.inputGroup.list.length == 1) {
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
        console.log(123)
        var i = e.target.dataset.i;
        var j = e.target.dataset.j;
        var tmpList = this.data.inputGroup.list;
        tmpList[i][j].value = e.detail.value;
        this.setData({
            [`inputGroup.list`]: tmpList,
        })
        console.log(tmpList)
    },
    postInputGroupValues(){
        var dataList = [];
        var tmpList = this.data.inputGroup.list;
        for(var arr of tmpList){
            var tmpObj = {};
            for(var obj of arr){
                tmpObj[obj.name] = obj.value;
            }
            dataList.push(tmpObj);
        }
      return dataList;
    }
  },
  ready:function() {
      this.initList();
  },
})
