Page({
 
  /**
   * 页面的初始数据
   */
  data: {
      currentData : 0,
      alllist:[
        {
          "id":0,
          "imgurl":"https://s1.ax1x.com/2022/03/26/qd7wTS.jpg",
          "tltle":"西式婚礼案例",
          "text":"爱其实很简单，或是将来能忆起感动彼此的故事，或是能让彼此",
          "text1":"2",
          "price":"98",
          "money":"999",
          "list":"2020111"
        },
        {
          "id":1,
          "imgurl":"https://s1.ax1x.com/2022/03/26/qd7DYQ.jpg",
          "tltle":"花园餐厅-求婚案例",
          "text":"爱其实很简单，或是将来能忆起感动彼此的故事，或是能让彼此",
          "text1":"0",
          "price":"100",
          "money":"1999",
          "list":"2020112"
        }
      ]
     
  },
  /**
   * 生命周期函数--监听页面加载
   */
  click(e){
     console.log(e)
     var id=e.currentTarget.dataset.id;
     var index=e.currentTarget.dataset.index;
     var shuz=this.data.alllist[index]
     console.log(shuz)
     wx.setStorage({
       key:"key",
       data:shuz,
       success:function(res){
        wx.navigateTo({
          url: '/pages/index1/index1?id='+id,
        })
       }
     })
     
  },
  onLoad: function (options) {
   
  },
  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
 
    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{
 
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }
})