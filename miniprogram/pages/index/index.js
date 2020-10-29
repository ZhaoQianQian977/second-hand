const db = wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    tabs: [],
    goods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.cloud.callFunction({
      name: "getDate",
      data: {
        name: 'banner'
      }
    }).then(res => {
      this.setData({
        banner: res.result.data
      })
    })
    wx.cloud.callFunction({
      name: "getDate",
      data: {
        name: 'tabs'
      }
    }).then(res => {
      this.setData({
        tabs: res.result.data
      })
    })
    wx.cloud.callFunction({
      name: "getNewDate",
      data: {
        name: 'goods'
      }
    }).then(res => {
      this.setData({
        goods: res.result.data
      })
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