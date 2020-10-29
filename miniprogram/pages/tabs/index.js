// miniprogram/pages/tabs/index.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let pages= getCurrentPages();
    let currentPage=pages[pages.length-1];
    let options=currentPage.options;
    const {tabs_id}=options;
    db.collection('tabs').get()
    .then(res=>{
      console.log(res)
      res.data.map(item=>{
        if(item.tabId==tabs_id){
          this.setData({
            title:item.title
          })
        }
      })
      
    })
    this.getTabsDetail(tabs_id);
   
  },
  getTabsDetail(id){
    db.collection('goods').where({
      tabs:id
    }).get()
    .then(res=>{
      // console.log(res)
      this.setData({
        goods:res.data
      })
    })
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