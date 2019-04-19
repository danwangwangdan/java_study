//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bnrUrl: ["https://www.daliandaxue.cn/img/qun.png",
      "https://www.daliandaxue.cn/img/dybg.png"
    ]
  },
  //事件处理函数
  toJavaBasic: function () {
    console.log('tojavabasic')
    wx.navigateTo({
      url: '../java/basic/basic'
    })
  },
  onLoad: function () {

  }
})