//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    resUrl1: 'https://www.lanzous.com/i3ublfa',
    resUrl2: 'https://www.lanzous.com/i3ubl8d',
    resUrl3: 'https://www.lanzous.com/i3ubkxc',
  },
  //事件处理函数
  firPart: function() {
    wx.setClipboardData({
      data: this.data.resUrl1,
      success(res) {

      }
    })
    wx.showToast({
      title: '复制下载链接成功，请前往浏览器打开!',
      icon: 'none',
      duration: 2000
    });
  },
  secPart: function() {
    wx.setClipboardData({
      data: this.data.resUrl2,
      success(res) {

      }
    })
    wx.showToast({
      title: '复制下载链接成功，请前往浏览器打开!',
      icon: 'none',
      duration: 2000
    });
  },
  thirdPart: function() {
    wx.setClipboardData({
      data: this.data.resUrl3,
      success(res) {

      }
    })
    wx.showToast({
      title: '复制下载链接成功，请前往浏览器打开!',
      icon: 'none',
      duration: 2000
    });
  },
  onLoad: function() {

  }
})