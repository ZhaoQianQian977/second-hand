// pages/goods_detail/index.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {},
    isCollect: false
  },
  GoodsInfo: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    let options = currentPage.options;
    const {
      goods_id
    } = options;
    this.getGoodsDetail(goods_id);

  },
  async getGoodsDetail(goods_id) {
    db.collection('goods').doc(goods_id).get()
      .then(res => {
        console.log(res)
        const goodsObj = res.data
        this.GoodsInfo = goodsObj
        let collect = wx.getStorageSync('collect', collect) || [];
        let isCollect = collect.some(v => v.goods_id === this.GoodsInfo.goods_id)
        this.setData({
          goodsObj: {
            goods_name: goodsObj.name,
            goods_price: goodsObj.price,
            goods_introduce: goodsObj.desc,
            pics: goodsObj.image,
          },
          isCollect
        })
      })
    },
  //点击加入购物车
  handleCartAdd(e) {
    //1.获取购物车中的数据 数组格式
    let cart = wx.getStorageSync("cart") || [];
    //2.判断商品对象是否存在于购物车数组中
    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id)
    if (index === -1) {
      //不存在，表示第一次添加
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo)
    } else {
      //已经存在
      cart[index].num++;
    }
    wx.setStorageSync("cart", cart);
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true
    });

  },
  handleCollect() {
    let isCollect = false
    let collect = wx.getStorageSync('collect') || [];
    let index = collect.findIndex(v => v.goods_id === this.GoodsInfo.goods_id)
    if (index !== -1) {
      collect.splice(index, 1);
      isCollect = false
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        mask: true,
      });

    } else {
      collect.push(this.GoodsInfo);
      isCollect = true;
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        mask: true,
      });
    }
    wx.setStorageSync('collect', collect);
    this.setData({
      isCollect
    })

  },


})