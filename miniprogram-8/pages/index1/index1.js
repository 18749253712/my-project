// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     alllist:"",
     style1:"big1",
    hide:"hide1"
  },
  mo(){
    console.log("点击我")
    this.setData({
      style1:"big",
      hide:"hide"
    })
},
cancel(){
    this.setData({
     style1:"big1",
      hide:"hide1"
    })
},
yuyue(){
   wx.navigateTo({
     url: '/pages/index/index',
   })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id=options.id;
    console.log(id)
      var that=this
      wx.getStorage({
        key:"key",
        success:function(res){
          console.log(res.data)
          that.setData({
            shuz:res.data
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})