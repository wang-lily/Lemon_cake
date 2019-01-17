// components/InputBox/InputBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"备 注："
    },
    placeholder:{
      type:String,
      value:"特殊需求请备注(少于200字)..."
    },
    value:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    remarkBoxShow:false,
    boxTransitionData:{},
    maskOpacityData:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    in:function(){
      this.setData({
        remarkBoxShow:true
      })
      console.log(this.data)
      setTimeout(()=>{
        this.boxTransition.translateY(-270).step();
        this.maskOpacityChange.opacity(1).step();
        this.setData({ 
          animationData1:this.boxTransition.export(),
          animationData2:this.maskOpacityChange.export()
        })
      },1)
    },
    out:function(){
      this.boxTransition.translateY(0).step();
      this.maskOpacityChange.opacity(0).step();
      this.setData({ 
        animationData1:this.boxTransition.export(),
        animationData2:this.maskOpacityChange.export()
      })
      setTimeout(()=>{
        this.setData({
          remarkBoxShow:false
        })
      },1000)  
    },
    handleConfirm:function(){
      this.out();
    },
    handleCancel:function(){
      this.out();
    },
  },
  
  ready:function(){
    const boxTransition = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.boxTransition = boxTransition;
    const maskOpacityChange = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.maskOpacityChange = maskOpacityChange;
  }
})
