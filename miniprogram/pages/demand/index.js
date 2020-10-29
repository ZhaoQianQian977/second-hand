// miniprogram/pages/category/index.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('goods').limit(10).orderBy('time','desc').get()
      .then(res => {
        // console.log(res)
        this.setData({
          goods: res.data
        })
      })
    // db.collection('goods').watch({
    //   onChange:res=>{
    //     let data=this.data.goods
    //     console.log('res',res)
    //     data=data.push(res)
    //     this.setData({
    //       goods:data
    //     })
    //     // console.log(this.data.goods)
    //   }
    // })
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