// pages/ingredients_detail/ingredients_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options !== '[]') {
      let temp = JSON.parse(options.detailInfo)
      console.log(temp)
      if(temp.length !== 0) {
        delete temp[0].id
        delete temp[0]._id
        this.setData({
          detailInfo: temp
        })
      }
      console.log(this.data.detailInfo)
    }
  }
})