//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  // 指定 全部订单 和 九宫格中按钮 点击跳转至 选项卡中 与之对应的tab
  allForm: function () {
    app.globalData.currentLocation = 0,
      wx.navigateTo({ url: '/pages/dingdan1/dingdan1' })
  },
  noPay: function () {
    app.globalData.currentLocation = 1,
      wx.navigateTo({ url: '/pages/dingdan1/dingdan1' })
  },
  noSend: function () {
    app.globalData.currentLocation = 2,
      wx.navigateTo({ url: '/pages/dingdan1/dingdan1' })
  },
  sended: function () {
    app.globalData.currentLocation = 3,
      wx.navigateTo({ url: '/pages/dingdan1/dingdan1' })
  },
  completed: function () {
    app.globalData.currentLocation = 4,
      wx.navigateTo({ url: '/pages/dingdan1/dingdan1' })
  },
 
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  myOrderList: function () {
    wx.navigateTo({
      url: '/pages/dingdan1/dingdan1',
    })
  },
  
})