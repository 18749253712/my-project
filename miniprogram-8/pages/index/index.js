// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') ,// 如需尝试获取用户信息可改为false
    num:1,
    minusStatus: 'disabled',
    count:0.00,
    totalPrice: 0, 
    pricelist:[
       {price: 999},
       {price: 1999}
    ]
  },
  onShow(){
    this.getprice();
  },
  jian: function() {  
    var num = this.data.num;  
    // 如果大于1时，才可以减  
    if (num > 1) {  
        num --;  
    }  
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';  
    // 将数值与状态写回  
    this.setData({  
        num: num,  
        minusStatus: minusStatus  
    });  
    this.getprice();
},
  jia: function() {  
    var num = this.data.num;  
    num ++;    
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({  
        num: num,  
        minusStatus: minusStatus  ,
    });
    this.getprice();
},  
/* 输入框事件 */  
submit(){
    wx.navigateTo({
      url: '/pages/dingdan/dingdan',
    })
},
getprice(){
     let pricelist=this.data.pricelist;
     let nums=this.data.num;
     let total=0;
     total +=nums * pricelist[0].price
     this.setData({
      pricelist:pricelist,
      totalPrice: total.toFixed(2)
     })
},
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad(options) {
    var that=this;
    wx.getStorage({
      key:"key",
      success:function(res){
        console.log(res.data.money)
        that.setData({
          shuz:res.data
        })
      }
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
