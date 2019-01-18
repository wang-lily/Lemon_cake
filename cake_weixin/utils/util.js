const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//更新购物车缓存，obj是一个对象，参数格式{cart(Array),success(Function),fail(Function),complete(Function)},其中cart必须传,其余参数可有可无
const updateStorageCart = (obj)=>{
  // console.log("购物车更新成功！")
  if(obj.cart.length==0){
    return;
  }
  wx.setStorage({
    key: 'cart',
    data: JSON.stringify(obj.cart),
    success:(res)=>{
      obj.success && obj.success(res);
    },
    fail:(res)=>{
      obj.fail && obj.fail(res);
    },
    complete: (res)=>{
      obj.complete && obj.complete(res);
    }
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  updateStorageCart:updateStorageCart
}
