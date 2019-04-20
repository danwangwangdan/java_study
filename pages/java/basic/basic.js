//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    resUrl: '',
    bnrUrl: ["https://www.daliandaxue.cn/img/qun.png",
      "https://www.daliandaxue.cn/img/dybg.png"
    ]
  },
  //事件处理函数
  toJavaBasic: function() {
    console.log('tojavabasic')
    wx.navigateTo({
      url: '../basic/basic'
    })
  },
  toStudy: function() {
    console.log('toStudy')
    wx.navigateTo({
      url: '../vedio/vedio'
    })
  },
  toDownload: function() {
    console.log('toDownload')
    wx.navigateTo({
      url: '../resd/resd'
    })
  },
  onLoad: function() {

  }
})