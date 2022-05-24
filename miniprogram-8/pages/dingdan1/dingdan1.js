var app = getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    // 选项卡
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    // 商品内容数据
    carts: [
      { "id": 1, imgurl: '../../../img/shangpin.jpg', type1: '爱其实很简单，或是将来能忆起感动彼此的故事，或是能让彼此会心一笑的回忆。', type2: '清香型', price: 100, num: 1 },
      { "id": 2, imgurl: '../../../img/shangpin.jpg', type1: '爱其实很简单，或是将来能忆起感动彼此的故事，或是能让彼此会心一笑的回忆。', type2: '清香型', price: 200, num: 2 },
      { "id": 3, imgurl: '../../../img/shangpin.jpg', type1: '爱其实很简单，或是将来能忆起感动彼此的故事，或是能让彼此会心一笑的回忆。', type2: '清香型', price: 300, num: 3 },
      { "id": 4, imgurl: '../../../img/shangpin.jpg', type1: '爱其实很简单，或是将来能忆起感动彼此的故事，或是能让彼此会心一笑的回忆。', type2: '清香型', price: 400, num: 4 },
    ],
  },
  /** * 滑动切换tab  */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** * 点击tab切换  */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /** * 获取系统信息  */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });
  },
  /**点击删除列表历史订单 */
  del: function(e) {
    wx.showModal({
      title: '提示',
      content: '确认删除该订单吗?',
      success: (res) => {
        if(res.confirm) {
          console.log("用户点击了确定")
          this.data.carts.splice(e.currentTarget.dataset.index, 1)
          this.setData({
            carts: this.data.carts
          })
        } else if(res.cancel) {
          console.log("用户点击了取消")
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.globalData.currentLocation == '') {
      this.setData({
        currentTab: 0
      });
    } else {
      var i = app.globalData.currentLocation;
      this.setData({
        currentTab: i
      });
    }
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