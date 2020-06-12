// pages/analysis_result/analysis_result.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result:'',
    type: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let temp = JSON.parse(options.result)
    console.log(temp)
    temp.forEach(item => {
      let that = this
      if(item.caution === 'high') {
        that.setData({
          type: 'high'
        })
        console.log(that.type)
        item.caution = '高'
      } else if(item.caution === 'normal') {
        that.setData({
          type: 'normal'
        })
        console.log(that.type)
        item.caution = '正常'
      } else {
        
        console.log(that.type)
        item.caution = '低'
      }
      if(item.nrv === 'undefined%' || item.nrv === ' ') {
        item.nrv = '0%'
      }
      this.setData({
        result: temp
      })
    })
  }
})