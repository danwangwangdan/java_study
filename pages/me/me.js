// pages/me/me.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    solveCount: 0,
    isAdmin: 0,
    nickname: '',
    office: '',
    tel: "",
    imgSrc: "",
    isLoading: false,
    formIds: [],
    isDisabled: false
  },
  toContact: function () {
    wx.navigateTo({
      url: '/pages/me/all/all'
    })
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
    var that = this;
    var userInfo = wx.getStorageSync("userInfo");
    var _imgSrc = wx.getStorageSync("imgSrc");
    if (_imgSrc == "") {
      _imgSrc = "../../pics/me_photo.png"
    }

  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
   
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