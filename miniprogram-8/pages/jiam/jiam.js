// pages/jiam/jiam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imglist:[
        {
          "imgurl":"https://s1.ax1x.com/2022/03/26/qdZdp9.jpg"
        },
        {
          "imgurl":"https://s1.ax1x.com/2022/03/26/qdecD0.jpg"
        },
        {
          "imgurl":"https://s1.ax1x.com/2022/03/26/qdeD3j.jpg"
        },
        {
          "imgurl":"https://s1.ax1x.com/2022/03/26/qdeGjI.jpg"
        }
      ],
      style1:"big1",
      hide:"hide1"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  answer(){
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