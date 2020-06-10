// pages/analysis_result/analysis_result.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let temp = JSON.parse(options.result)
    this.setData({
      result: temp
    })
  }
})