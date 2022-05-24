// pages/shouye/shouye.js
const app = getApp()
const { datalist } = require('../../textdata/data.js');
var jsonData = require('../../textdata/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist:[
      {
        "imgurl":"https://s1.ax1x.com/2022/03/24/qJPn4U.png",
        "tltle":"Featured Case 精选案例",
        "text":"网络预约",
        "text1":"即可享受专人服务",
        "text2":"只为您！"
      }
    ],
    inputlist:[
      {
        "tilte":"怎么称呼您",
        "text":"请输入姓名"
      },
      {
        "tilte":"怎么称呼您",
        "text":"请输入姓名"
      },
      {
        "tilte":"怎么称呼您",
        "text":"请输入姓名"
      },
      {
        "tilte":"怎么称呼您",
        "text":"请输入姓名"
      }
    ],
    style:"msg",
    style1:"big1",
    hide:"hide1",
    currentId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       imagelist:jsonData.datalist
     })
    //  console.log(dataList)
  },
  handleTap1(){
   console.log("鼠标移动了")
   this.setData({
     style:"ss"
   })
 },
 submit(){
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration:2000
    })
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